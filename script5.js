 function myvalidate(){
var name=document.getElementById('name').value;
var lname=document.getElementById('lname').value;
var email=document.getElementById('email').value;
var code=document.getElementById('code').value;
var number=document.getElementById('number').value;
var amount=document.getElementById('amount').value;
var atPosition=email.indexOf('@');
var dotPosition=email.lastIndexOf('.');
var at=email.indexOf('@');
var dot=email.lastIndexOf('.');
var num=/[0-9]/;
var lower=/[a-z]/;
var upper=/[A-Z]/;

if((name=="")||(name==null)){
alert('name cannot be null');
return false;
}
if(name.match(num)){
alert('name cannot have numbers');
return false;
}
if(lname.match(num)){
alert('name cannot have numbers');
return false;
}
if((lname=="")||(lname==null)){
alert('Last Name cannot be null');
return false;
}
if((email=="")||(email==null)){
alert('Email cannot be null');
return false;
}
if((email.length<=3)){
alert('length must be greater than 3');
return false;
}
if(atPosition<1){
alert('@ position is invalid');
return false;
}
if(dotPosition>email.length-3){
alert('. must be properly placed');
return false;
}
if((dotPosition-atPosition)<3){
alert('maintain proper gap between dot and atrate');
return false;
}


if((code=="")||(code==null)){
alert('Country code cannot be null');
return false;
}
if((number=="")||(number==null)){
alert('Number cannot be null');
return false;
}
if((amount=="")||(amount==null)){
alert('Amount cannot be null');
return false;
}
if(number.length!=10){
alert('invalid number');
return false;
}
if(code.length!=4){
alert('invalid code');
return false;
}


}