var express = require('express');
var router = express.Router();
router.get('/api', (req, res, next)=>{
    res.send('api-user');
});

module.exports = router;