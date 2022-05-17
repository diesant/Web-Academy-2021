// This function is how the information you put on the first page connects to the second. For example if you type you name in the text box this function is how it puts your name on the info part in teh next page.
function submitForum(){

  
  let userName=document.userform.input_username.value;
  let userPhone=document.userform.input_phoneNum.value;
  let userEmail=document.userform.input_email.value;
  let userNameResult=document.getElementById("nameResult");
  let userPhoneResult=document.getElementById("phoneNumResult");
  let userEmailResult=document.getElementById("emailResult");

  userNameResult.innerHTML=userName;
  userPhoneResult.innerHTMl=userPhone;
  userEmailResult.innerHTML=userEmail;
  console.log(userEmail,userName,userPhone);

  var x = document.getElementById("before");
  var y = document.getElementById("after")
  if (x.style.display === "none") {
    x .style.display = "block";
    x.style.opacity ="1";
    
  } else {
    x.style.display = "block"; 
    x.style.display = 
  }
}
