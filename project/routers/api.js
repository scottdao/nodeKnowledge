var express = require("express");
var router = express.Router();
// router.get("/", (req, res, next) => {
//   res.send("api-user");
// });

router.post('/userRegister', (req, res, next)=>{
  console.log(req.body) 
  res.send({})
})

module.exports = router;
