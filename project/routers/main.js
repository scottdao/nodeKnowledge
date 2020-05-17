var express = require('express');
var router = express.Router();
router.get('/', (req, res, next)=>{
   // res.send('User');
  //  console.log(req.userInfo)
   res.render('index', {
       userInfo:req.userInfo
   })
});

module.exports = router;