var express = require('express');
var router = express.Router();
var myModel=require('../database/model');

router.get('/',function(req, res, next){
res.render('register',{title: '注册页面'})
});
router.post('/',function(req,res,next){
var doc={username:req.body.username};

myModel.findOne(doc,function(err,mod){
if(err)
  console.log(err);
else{
if(mod!=null)
{
  console.log('find one data');
  res.render('register',{title: '用户名密码存在！'});
}
else
{
  var modstore={username:req.body.username,password:req.body.password};
  var S=new myModel(modstore);
  S.save(function(err,doc){
if(err)
  console.log(err);
else
{
  res.redirect('login');
}
  });
}
}

});

//res.redirect('login');
});
module.exports=router;