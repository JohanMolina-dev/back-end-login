const router = require('express').Router();

const apiRouterUser = require ('./api/users.js');

router.use('/user', apiRouterUser);


module.exports=router;