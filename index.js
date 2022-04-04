console.log("This is index.js");
const username = document.getElementById('name');
const email = document.getElementById('email');
const invalidName = document.querySelector('#namevalid');
invalidName.style.display = 'none';
const invalidEmail = document.querySelector('#emailvalid');
invalidEmail.style.display = 'none';
let userCode = true;
let emailCode = true;

// name verification
username.addEventListener('blur',()=>{
    // console.log(" username event blurred")
    let regex = /^([a-zA-Z]){1,8}\s?([a-zA-z]){1,8}/
    let str = username.value;
    // console.log(regex,str);
    if(regex.test(str)){
        // console.log("name is valid");
        invalidName.style.display = 'none';
        userCode = false;
    }else{
        // console.log('Name is invalid');
        invalidName.style.display = 'block';
        userCode = true;
    }
}) ;

//email vereification 
email.addEventListener('blur',()=>{
    // console.log("email is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex,str);
    if(regex.test(str)){
        // console.log('valid')
        invalidEmail.style.display = 'none';
        emailCode = false;
    }else{
        // console.log('invalid');
        invalidEmail.style.display = 'block';
        emailCode = true;
    }
})

// submit verification
let submit = document.getElementById("submit");
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log("submit is clicked");
    if(userCode && emailCode){
        // console.log(userCode,emailCode);
        alert("There is some issue in your name or email.Refill the form")
    }else{
        alert("Your form is submitted successfully");
        // console.log(userCode,emailCode);
    }
})



