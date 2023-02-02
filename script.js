// let userData = [];
// let userCounter = 0;


// function storeAndShowuserData() {
//   let firstname = document.getElementById("firstname").value;
//   let lastname = document.getElementById("lastname").value;
//   let username = document.getElementById("username").value;
//   let email = document.getElementById("email").value;
//   let phone = document.getElementById("phone").value;
//   let password = document.getElementById("password").value;

//   //   regex validataion start here

//   var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
//   var regPhone = /^\d{10}$/;


//   if (firstname.length < 5 ) {
    
//     alert("First Name should be greated than 5 charcter");
    
//     return false;
//   } else if (lastname.length < 5 ) {
    
//     alert("Last Name should be greated than 5 charcter");
    
//     return false;
//   } else if (username.length < 5 ) {
    
//     alert("Last Name should be greated than 5 charcter");
    
//     return false;
//   } else if (email == "" || !regEmail.test(email)) {
//     alert("Please enter valid Email.");
    
//     return false;
//   } else if (phone == "" || !regPhone.test(phone)) {
//     alert("Please enter valid phone Number.");
    
//     return false;
//   } else if (password.length < 3) {
//     alert("Password should be greather than 7 character");
   
//     return false;
//   } else {
//     userCounter++;

//     userData.push([firstname, lastname, username, email, phone, password]);

//     let dataDisplay = "";

//     for (let i = 0; i < userData.length; i++) {
//       //   dataDisplay += "Sn: " + (i + 1) + ":<br>";
//       dataDisplay += "<tr> <td>USER" + (i + 1) + "</td>";
//       dataDisplay += "<td>" + userData[i][0] + "</td>";
//       dataDisplay += "<td> " + userData[i][1] + "</td>";
//       dataDisplay += "<td> " + userData[i][2] + "</td>";
//       dataDisplay += "<td> " + userData[i][3] + "</td>";
//       dataDisplay += "<td> " + userData[i][4] + "</td>";
//       dataDisplay += "<td> " + userData[i][5] + "</td></tr>";
//     }
//     document.getElementById("display").innerHTML = dataDisplay;
//     // display.innerHTML = dataDisplay;
//     //    console.log(userCounter);
//     document.getElementById("counter").innerHTML =
//       "Total Registerd user is : " + userCounter;
//     reset();
//     function reset() {
//       document.getElementById("firstname").value = "";
//       document.getElementById("lastname").value = "";
//       document.getElementById("username").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("phone").value = "";
//       document.getElementById("password").value = "";
//     }
//   }
//   return true;
// }


let userData = [];
let userCounter = 0;


let hasMapUsername = {};
let hasMapPassword = {};

function storeAndShowuserData() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  //   regex validataion start here

  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regPhone = /^\d{10}$/;


  if (firstname.length < 5 ) {
    
    alert("First Name should be greated than 5 charcter");
    
    return false;
  } else if (lastname.length < 5 ) {
    
    alert("Last Name should be greated than 5 charcter");
    
    return false;
  } else if (username.length < 5 ) {
    
    alert("Last Name should be greated than 5 charcter");
    
    return false;
  } else if (email == "" || !regEmail.test(email)) {
    alert("Please enter valid Email.");
    
    return false;
  } else if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter valid phone Number.");
    
    return false;
  } else if (password.length < 3) {
    alert("Password should be greather than 7 character");
   
    return false;
  } else {
    userCounter++;

    let user = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      phone: phone,
      password: password
    };

    userData.push(user);

    let dataDisplay = "";

    for (let i = 0; i < userData.length; i++) {
      dataDisplay += "<tr> <td>USER" + (i + 1) + "</td>";
      dataDisplay += "<td>" + userData[i].firstname + "</td>";
      dataDisplay += "<td> " + userData[i].lastname + "</td>";
      dataDisplay += "<td> " + userData[i].username + "</td>";
      dataDisplay += "<td> " + userData[i].email + "</td>";
      dataDisplay += "<td> " + userData[i].phone + "</td>";
      dataDisplay += "<td> " + userData[i].password + "</td></tr>";
    }
    document.getElementById("display").innerHTML = dataDisplay;
    document.getElementById("counter").innerHTML =
      "Total Registerd user is : " + userCounter;
      reset();
      function reset() {
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("password").value = "";
      }
    }
  }
    


    hasMapUsername[username] = password;
    hasMapPassword[password] = password;

function signIn() {
  let userName = document.getElementById("signusername").value;
  let password = document.getElementById("signpassword").value;

  
//   console.log("testin...");
//   console.log(userName);
//   console.log(password);


// let result = false;
//   for (let i = 0; i < userData.length; i++) {
//     if (userName == userData[i].username && password == userData[i].password) {
//         result = true;
//     }
//   }
//   if(result == true){
//     alert("logged successfully");
    
//   }else{
//     alert("not valid");
//   }

// function authenticate(EmailOrUsername, signInPassword){
  if(hashMapEmail[userName]===password || hasMapPassword[userName]===password){
      alert("verified");
  }
  else{
      alert("Not verified");
  } 
}
// }


function hideSignIn() {
    // document.getElementById("signindiv").style.display = "none";
    document.getElementById("signindiv").style.display="block";
    // document.getElementById("regform").style.display="none";

}

console.log(userData);