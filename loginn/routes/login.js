var express = require('express');
var router = express.Router();
var myModel=require('../database/model');

router.get('/',function(req, res, next){
res.render('login',{title: 'loginPage'})
});
router.post('/',function(req,res,next){
var docs={username:req.body.username,password:req.body.password};
myModel.count(docs,function(err,doc){
if(err) console.log(err);
else
{
	if(doc==1)
	{
		res.render('index',{title: req.body.username});
	}
	else
	{
		res.render('login',{title: '用户名密码错误'});
	}
}
});
});

module.exports=router;