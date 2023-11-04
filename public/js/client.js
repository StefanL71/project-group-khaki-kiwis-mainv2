// import { getCookies, deleteCookies, addCookies } from "./cookies.js";

window.addEventListener("load", function () {
    const password = document.getElementById("txtPassword");
    const confirmPassword = document.getElementById("confirmPassword");

    // Function to validate the re-entered password
    function checkPassword() {
        if (password.value !== confirmPassword.value) {
            document.getElementById("message").innerHTML = "Passwords do not match. Please try again.";
            document.getElementById("submitBtn").disabled = true;
        } else {
            alert("Password created successfully!");
            document.getElementById("submitBtn").disabled = false;
        }
    }
    // Function for logging in via nav icon   
    const icon = document.getElementById("login-icon");
    const loginForm = document.querySelector(".login-form");
    icon.addEventListener("click", function(){
        if(loginForm.classList.contains("open")){
            loginForm.classList.remove("open");
                    }
                    else{
                        loginForm.classList.add("open")
                    }
    })

//like counter
let clicks = 0;
document.getElementById("clicks").innerHTML = clicks;

document.querySelectorAll('.like-counter')[0].addEventListener('click', function() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  document.querySelectorAll('.like-counter')[0].classList.add("liked");

});
    
    // get list of current usernames
    let usernamesAlreadyTaken = [];
    fetch("http://localhost:3000/usernames")
        .then(function (response) {
            if (!response.ok) {
                // Handle network error or invalid response
                throw new Error("Request failed with status: " + response.status);
            }
            return response.json(); // Parse response as JSON
        })
        .then(function (data) {
            usernamesAlreadyTaken = data;
        })
        .catch(function (error) {
            console.error(error);
        });

    // Check if username is already taken by another user
    let usernameValid = true
    let txtUsername = document.querySelector("#username");
    txtUsername.addEventListener("input", function () {
        usernamesAlreadyTaken.forEach(user => {
            if (user.username === txtUsername.value) {
                usernameValid = false;
            }
        });
        const submitButton = document.getElementById('submit-button');
        if (!usernameValid) {
            alert("Username already taken. Please try another username.");
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
        }
    });
});

function refreshPage(){
    window.location.reload();
}
