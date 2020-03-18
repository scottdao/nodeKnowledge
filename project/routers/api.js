var express = require("express");
var router = express.Router();
var User = require('../models/User.js')
// router.get("/", (req, res, next) => {
//   res.send("api-user");
// });
// 遍历对象
const vaildValue = (data) =>{
  for (const key in data) {
    if (!(data.hasOwnProperty(key)&&data[key])) {
      return  {falg:false, message:`${key} can not be empty`};
    }
  }
  return {flag:true, message:""};
}

//注册路由
router.post('/userRegister', (req, res, next)=>{
  try {
  const data = req.body;
  let response={
    code:200,
    data:1,
    message:'注册成功',
    success:true
  }
  if(vaildValue(data).flag){
    if(data.pwsd!==data.pswdAgin){
      response={
        code:412,
        data:0,
        message:"注册时，密码与确认密码保持一致",
        success:false
      }
      res.status(response.code).send(response);
    }else{
      //成功后，存数据库
      // console.log(User, '111')
      User.findOne({userName:data.userName}).then(async(userInfo) => {
        if(userInfo){
          response={
            code:412,
            data:0,
            message:"该用户名已经被注册，请重新注册",
            success:false
          }
          res.status(response.code).send(response);
        }else{
          const user = new User({
              userName:data.userName,
              password:data.pwsd
            });
          const saveInfo = await user.save();
          console.log('-----',saveInfo, '-------');
          console.log('注册成功')
          res.status(response.code).send(response);
        }
      })
     
    }
  }else{
    response={
      code:412,
      message:vaildValue(data).message,
      success:false
    }
    res.status(response.code).send(response);
  }
  } catch (error) {
    console.log(error)
     res.status(500).send(error)
  }
  
})

router.post('/userLogin', (req, res,next)=>{
  const response = {
      code:200,
      data:1,
      message:"登录成功",
      success:true
  }
    try {
      const data = req.body;
      if(vaildValue(data).flag){
        User.findOne({userName:data.userName, password:data.pwsd }).then(async info=>{
          if(info){
              // console.log(info)
              res.status(200).send({
               ...response,
               data:{
                 _id:info._id,
                 userName:info.userName
               }
             })
          }else{
             res.status(412).send({
               ...response,
               code:"412",
               success:false,
               message:"用户未注册，或者密码输入有误！",
               data:0
             })
          }
        })
      }else{
        res.status(412).send({
               code:"412",
               success:false,
               message:"用户名或者密码不能为空！",
               data:0
        })
      }
     
    } catch (error) {
      res.status(500).send(error)
    }
})
module.exports = router;
