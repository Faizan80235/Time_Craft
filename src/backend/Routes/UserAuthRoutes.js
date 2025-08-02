const express=require("express");
const router=express.Router();
const {Registerd,}=require("../Controller/UserAuth");
router.post('/',Registerd)
// router.post('/',getUsers)
module.exports=router