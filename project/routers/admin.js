var express = require('express');
var router = express.Router();
router.get('/admin', (req, res, next)=>{
    res.send('admin-user');
});

module.exports = router;