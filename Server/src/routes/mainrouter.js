const express=require('express');
const router = express.Router(); // Create an instance of Express Router
const authRouter = require("../routes/auth");

router.use('/auth', authRouter);



module.exports=router;