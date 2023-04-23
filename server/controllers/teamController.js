const Team = require('../models/teamModel');
const Member = require('../models/memberModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Email = require('../utils/email');

exports.getTeam = catchAsync(async (req, res, next) => {
  const team = await Team.find({ _id: req.params.teamID }).populate(
    'memberData'
  );

  if (!team) {
    return next(new AppError('No team found with that name', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      team,
    },
  });
});

exports.getAllTeams = catchAsync(async (req, res, next) => {
  const teams = await Team.find({ isAdmin: false });

  res.status(200).json({
    status: 'success',
    // results: teams.length,

    data: {
      noofteams: teams.length,
    },
  });
});

//* SENDING VERIFICATION TOKEN REMINDER
exports.sendReminderVerification = catchAsync(async (req, res, next) => {
  const teams = await Team.find({ emailVerified: false });
  if (!teams) {
    return next(new AppError('All teams are verified', 404));
  }

  teams.map(async (team) => {
    const activateToken = team.createActivationString();
    const activateURL = `${process.env.FRONTEND_HOST}/activate/${activateToken}`;
    await new Email(team, activateURL).sendReminderVerificationToken();
  });

  res.status(200).json({
    status: 'success',
    data: {
      noofteams: teams.length,
    },
  });
});

//* SENDING VERIFICATION TOKEN REMINDER-ADVANCED
exports.sendReminderVerificationAdvanced = catchAsync(
  async (req, res, next) => {
    let count = 0;
    // 01.) Get teams those emails are not verified
    const teams = await Team.find({ emailVerified: false });

    teams.map(async (team) => {
      const activateToken = team.createActivationString();
      const activateURL = `${process.env.FRONTEND_HOST}/activate/${activateToken}`;
      await new Email(team, activateURL).sendReminderVerificationToken();
    });

    // 02.) Get teams those emails are verified and not added members
    const teams2 = await Team.find({ emailVerified: true, isAdmin: false });

    teams2.map(async (team) => {
      const membersAvailable = await Member.find({ team: team._id });
      if (membersAvailable.length === 0) {
       // console.log(team.teamName);
        const activateToken = team.createActivationString();
        const activateURL = `${process.env.FRONTEND_HOST}/activate/${activateToken}`;
        await new Email(team, activateURL).sendReminderVerificationToken();

        team.emailVerified = false;
        await team.save({ validateBeforeSave: false });
        count += 1;
      }
    });

    res.status(200).json({
      status: 'success',
      data: {
        notemailverified: teams.length,
        notmembersadded: count,
      },
    });
  }
);
