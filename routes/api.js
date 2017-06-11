/**
 * Created by xxmm on 2017/6/11.
 */
var express = require('express')
var router = express.Router()


router.get('/users', function (req,res,next) {

    var  users = [{name:'zhangmeng',age:18},{name:'zhangmeng',age:18},{name:'zhangmeng',age:18}];

    res.send(JSON.stringify(users));
});


router.route('/users').post(function (req,res) {
    res.send("134");
});
module.exports = router;