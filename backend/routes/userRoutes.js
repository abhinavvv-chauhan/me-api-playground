const express = require('express');
const router = express.Router();
const { getProfile, getProjects, search } = require('../controllers/userController');

router.get('/profile', getProfile);
router.get('/projects', getProjects); 
router.get('/search', search);      

module.exports = router;