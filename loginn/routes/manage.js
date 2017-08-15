var express = require('express');
var router = express.Router();
var myModel=require("../database/model").get_model;
var Operator=require("../database/Operator").userModel;

router.get('/',function(req,res,next){
    res.render('manage',{
      title:'',
     title2:''
    });
});
//添加
router.post('/add',function(req,res,next){
var docs = {username:req.body.usernameAdd,password:req.body.passwordAdd};
Operator.findByName(req.body.usernameAdd,function(err,doc){
	if(!err)
	{
		if(!doc)
		{
			Operator.save(docs);
			res.render('manage',{title:'添加成功',title2:'用户名：'+req.body.usernameAdd+'密码：'+req.body.passwordAdd});
		}
		else
		{
			res.render('manage',{title:'该用户已经存在',title2:''});
		}
	}
	else
	{
		console.log(err);
	}
});
});

//查询
router.post('/query',function(req,res,next) {
	//var doc = {username:req.body.username,pwd:req.body.pwd};
  Operator.findByName(req.body.username,function(err,doc){
       if(!err)
       {
        if(doc==null)
        {
        	res.render('manage',{title: '查无此记录',title2:''});
        }
        else 
        {
        	res.render('manage',{title: req.body.username,title2:req.body.password});
        }

       }
        else
        	console.log(err);
    });
});
//删除
router.post('/remove',function(req,res,next){
  // var removedoc = {username:req.body.usernameRemove};
Operator.findByName(req.body.usernameRemove,function(err,doc){
	if(!err)
	{
		if(!doc)
		{
			res.render('manage',{title:'该用户不存在',title2:''});
		}
		else
		{
			Operator.remove(doc);
			res.render('manage',{title:'删除成功',title2:'删除用户名：'+req.body.usernameRemove});
		}
	}
	else
	{
		console.log(err);
	}
});
});
//修改
router.post('/modify',function(req,res,next){
 //  var modifydoc = {username:req.body.usernameModify,password:req.body.passwordModify};
var modifydocf={username:req.body.usernameModifyF,password:req.body.passwordModifyF};
Operator.findByName(req.body.usernameModify,function(err,doc){
	if(!err)
	{
		if(doc!=null)
		{
			console.log(doc);
		Operator.update(doc,modifydocf);
		res.render('manage',{title:'修改成功',title2:'修改后的用户名：'+req.body.usernameModifyF+'修改后的密码：'+req.body.passwordModifyF});
		}
		else
		{
			res.render('manage',{title:'该用户不存在',title2:''});
		}
	}
	else
	{
		console.log(err);
	}
});
});


module.exports=router;