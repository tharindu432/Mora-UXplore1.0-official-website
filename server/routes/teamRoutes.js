const express = require('express');
const teamController = require('../controllers/teamController');
const authController = require('../controllers/authController');

const router = express.Router();

// @route: POST
// @desc: Create New Team
// @access: Public

router.post('/signup', authController.signUp);

router.post('/login', authController.login);

// @route: GET
// @desc: Get All Team's Name
// @access: Public

// router.get('/get-team-names', teamController.getTeamNames);

module.exports = router;
