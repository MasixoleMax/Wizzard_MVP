
//validate the login form
       function login() {
    
        let uname = document.getElementById("emis").value;
        let pwd = document.getElementById("password").value;
        let filter = /[0-9]/;
        let form = document.querySelector("form");

        if(uname =='')
        {
          alert("please enter the EMIS number!");
        }
        
        else if(pwd=='')
        {
          alert("please enter your password!");
        }
        
        else if (!filter.test(uname))
        {
          alert("Enter valid EMIS number!");
        }
        
    else if (pwd.length < 6 || pwd.length > 6)
        {
          alert("Password min and max length is 6 characters");
        }
        else
        {
          alert('Thank You for Logging in! You are now bieng Redirected to the home page.');
        }

        window.location.href="../html/homePage.html";
       }

//validate the register form

const form = document.querySelector("form");
eField = form.querySelector(".email");
eInput = eField.querySelector("input");
pField = form.querySelector(".password");
pInput = pField.querySelector("input");


