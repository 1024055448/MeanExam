//var mongoose=require('mongoose');
var userModel=require("../database/model").get_model;
var Operator=function(){};
Operator.prototype={
	//增
	save:function(json,callBack){
		var newUser=new userModel(json);
		newUser.save(function(err){
             if(!err)
        	{
        		console.log("提交成功");
        	}else
        	{
        		console.log("提交失败"+err);
        	}
		});
	},
	//删
	remove:function(json,callBack){
		userModel.remove(json,function(err){
if(!err)
        	{
        	console.log("移除");	
        	}
else
        	{
        		console.log("移除失败"+err);
        		callBack(err);
        	}
		});
	},
	//改
	update:function(json,condition,callBack){
		userModel.update(json,condition,function(err){

if(!err)
        	{
        		console.log("修改成功");
        	}else
        	{
        		console.log("修改失败"+err);
        		callBack(err);
        	}
		});
	},
	//查
	findByName: function(name,callback){
        userModel.findOne({username:name}, function(err,doc){
            callback(err,doc);
        });
    }
  };

exports.userModel=new Operator();