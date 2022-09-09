const express = require('express');
const userRoutes = express.Router();
const userCtrl = require('../controllers/user');
const {LOGIN, REGISTER, PROFILE, DELETE,CHANGEPASSWORD, UPDATE} = require('../utils/constants/app_constants').ROUTES.USER;
userRoutes.post(LOGIN, userCtrl.login);
userRoutes.post(REGISTER, userCtrl.register);
// userRoutes.get(PROFILE, userCtrl.profile);
// userRoutes.get(DELETE, userCtrl.deleteProfile);
// userRoutes.put(CHANGEPASSWORD, userCtrl.changepassword);
// userRoutes.post(UPDATE, userCtrl.update);
module.exports = userRoutes;