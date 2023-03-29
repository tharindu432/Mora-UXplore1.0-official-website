const Member = require('../models/memberModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.addMembers = catchAsync(async (req, res, next) => {
  const { team, university, t01, t02, t03 } = req.body;

  const newMember = await Member.create({ team, university, t01, t02, t03 });

  res.status(201).json({
    status: 'success',
    data: {
      member: newMember,
    },
  });
});
