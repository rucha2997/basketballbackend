const { register } = require('../controllers/user.controller');

const router = require('express').Router();


router.post('/',register);

module.exports = router;
