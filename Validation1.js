<html>
<head>
<script>
function emailValidation(mail){
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)){
return true;}
else{
alert("You have entered a invalid email address")
return false;
}
}
</script>
</head>
<body>
</body>
</html>