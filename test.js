// var emailArray=[];
//         var passwordArray=[];

//         var loginBox = document.getElementById("login");
//         var regBox = document.getElementById("register");
//         var forgetBox = document.getElementById("forgot");

//         var loginTab = document.getElementById("lt");
//         var regTab = document.getElementById("rt");

//         function regTabFun(){
//             event.preventDefault();

//             regBox.style.visibility="visible";
//             loginBox.style.visibility="hidden";
//             forgetBox.style.visibility="hidden";

//             regTab.style.backgroundColor="rgb(12, 132, 189)";
//             loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
//         }
//         function loginTabFun(){
//             event.preventDefault();

//             regBox.style.visibility="hidden";
//             loginBox.style.visibility="visible";
//             forgetBox.style.visibility="hidden";

//             loginTab.style.backgroundColor="rgb(12, 132, 189)";
//             regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
//         }
//         function forTabFun(){
//             event.preventDefault();

//             regBox.style.visibility="hidden";
//             loginBox.style.visibility="hidden";
//             forgetBox.style.visibility="visible";

//             regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
//             loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

//         }


//         function register(){
//             event.preventDefault();

//             var email = document.getElementById("re").value;
//             var password = document.getElementById("rp").value;
//             var passwordRetype = document.getElementById("rrp").value;

//             if (email == ""){
//                 alert("Email required.");
//                 return ;
//             }
//             else if (password == ""){
//                 alert("Password required.");
//                 return ;
//             }
//             else if (passwordRetype == ""){
//                 alert("Password required.");
//                 return ;
//             }
//             else if ( password != passwordRetype ){
//                 alert("Password don't match retype your Password.");
//                 return;
//             }
//             else if(emailArray.indexOf(email) == -1){
//                 emailArray.push(email);
//                 passwordArray.push(password);

//                 alert(email + "  Thanks for registration. \nTry to login Now");

//                 document.getElementById("re").value ="";
//                 document.getElementById("rp").value="";
//                 document.getElementById("rrp").value="";
//             }
//             else{
//                 alert(email + " is already register.");
//                 return ;
//             }
//         }
//         function login(){
//             event.preventDefault();

//             var email = document.getElementById("se").value;
//             var password = document.getElementById("sp").value;

//             var i = emailArray.indexOf(email);

//             if(emailArray.indexOf(email) == -1){
//                 if (email == ""){
//                     alert("Email required.");
//                     return ;
//                 }
//                 alert("Email does not exist.");
//                 return ;
//             }
//             else if(passwordArray[i] != password){
//                 if (password == ""){
//                     alert("Password required.");
//                     return ;
//                 }
//                 alert("Password does not match.");
//                 return ;
//             }
//             else {
//                 alert(email + " yor are login Now \n welcome to our website.");

//                 document.getElementById("se").value ="";
//                 document.getElementById("sp").value="";
//                 return ;
//             }

//         }
//         function forgot(){
//             event.preventDefault();

//             var email = document.getElementById("fe").value;

//             if(emailArray.indexOf(email) == -1){
//                 if (email == ""){
//                     alert("Email required.");
//                     return ;
//                 }
//                 alert("Email does not exist.");
//                 return ;
//             }

//             alert("email is send to your email check it in 24hr. \n Thanks");
//             document.getElementById("fe").value ="";
//         }


//Choose signUp and signIn


document.getElementsByClassName("signIn-box")[0].style.display = "none";

document.getElementById("upBtn").addEventListener('click', ()=>{
    document.getElementsByClassName("signUp-box")[0].style.display = "block";
    document.getElementsByClassName("signIn-box")[0].style.display = "none";
})
document.getElementById("inBtn").addEventListener('click', ()=>{
    document.getElementsByClassName("signIn-box")[0].style.display = "block";
    document.getElementsByClassName("signUp-box")[0].style.display = "none"; 
})


const submit = document.getElementById("submitBtn").addEventListener("click", handleSubmit);
const reset = document.getElementById("resetBtn").addEventListener("click", handleReset);

const details = [];
let hashMapEmail = {};
let hashMapUsername = {};

let userId = 0;
function User(fname, lname, username, email, password){
    this.userId = userId;
    this.fname = fname;
    this.lname = lname;
    this.password = password;                         
    this.email = email;
    this.username = username;
}
let header = `<tr class="header">
<th>UserId</th>
<th>First Name</th>
<th>Last Name</th>
<th>Username</th>
<th>Email</th>
<th>Password</th>
</tr>`;
const outputContainer = document.getElementsByClassName("output-container")[0];
outputContainer.style.display = "none";
function handleSubmit(event){
    event.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    if(fname.length===0){
        const field = document.getElementById("invalid-fname");
        field.innerHTML = "Invaid Data";
        setTimeout(()=>{
            field.innerHTML = "";
        },2000);
        return false;
    }
    if(lname.length===0){
        const field = document.getElementById("invalid-lname");
        field.innerHTML = "Invaid Data";
        setTimeout(()=>{
            field.innerHTML = "";
        },2000);
        return false;
    }
    if(password.length<8){
        const field = document.getElementById("invalid-password");
        field.innerHTML = "Invaid Data";
        setTimeout(()=>{
            field.innerHTML = "";
        },2000);
        return false;
    }
    var validRegexUsername = "^[A-Za-z][A-Za-z0-9_]{7,29}$";
    if(username.match(validRegexUsername)===null || hashMapUsername[username]!=undefined){
        const field = document.getElementById("invalid-username");
        field.innerHTML = "Invaid Data";
        setTimeout(()=>{
            field.innerHTML = "";
        },2000);
        return false;
    }
    var validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegexEmail)===null || hashMapEmail[email]!=undefined){
        const field = document.getElementById("invalid-email");
        field.innerHTML = "Invaid Data";
        setTimeout(()=>{
            field.innerHTML = "";
        },2000);
        return false;
    }
    
    userId++;
    const user = new User(fname, lname, username, email, password);
    details.push(user);
    let str = header;
    const output = document.getElementsByClassName("output")[0];
    outputContainer.style.display = "block";
    details.forEach((user, index)=>{
            str+= `<tr >
            <td>${user.userId}</td>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            </tr>`;
})
hashMapEmail[email] = password;
hashMapUsername[username] = password;
output.innerHTML = str;
//handleReset();
}



function handleReset(event){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";

}


///Sign - In
function handleSignIn(e){
    e.preventDefault();
    const EmailOrUsername = document.getElementById("signInEmail").value;
    const signInPassword = document.getElementById("signInPassword").value;
    authenticate(signInEmail, signInPassword);
}
function authenticate(EmailOrUsername, signInPassword){
    if(hashMapEmail[EmailOrUsername]===signInPassword || hashMapUsername[EmailOrUsername]===signInPassword){
        alert("verified");
    }
    else{
        alert("Not verified");
    }
}
document.getElementById("signIn").addEventListener('click', handleSignIn);







