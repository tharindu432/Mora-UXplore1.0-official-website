const Team = require('../models/teamModel');
const catchAsync = require('../utils/catchAsync');

// exports.getTeamNames = catchAsync(async (req, res, next) => {
//   const teams = await Team.find({}, 'team_name');
//   const teamNamesArray = teams.map((team) => team.team_name);
//   res.status(200).json({
//     status: 'success',
//     data: {
//       teamsName: teamNamesArray,
//     },
//   });
// });
