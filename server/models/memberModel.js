const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
    },
    university: {
      type: String,
      required: [true, 'University is Required !'],
    },
    t01: {
      name: {
        type: String,
        required: [true, 'Name is Required !'],
      },
      contact: {
        type: String,
        required: [true, 'Contact No is Required !!'],
      },
      university_index: {
        type: String,
        required: [true, 'University Index is Required !!'],
      },
    },
    t02: {
      name: {
        type: String,
        required: [true, 'Name is Required !'],
      },
      university_index: {
        type: String,
        required: [true, 'University Index is Required !!'],
      },
    },
    t03: {
      name: {
        type: String,
        required: [true, 'Name is Required !'],
      },
      university_index: {
        type: String,
        required: [true, 'University Index is Required !!'],
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: { virtuals: true },
  }
);

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
