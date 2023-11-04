window.addEventListener("load", function () {

    //Get reference to image element
const image = document.querySelectorAll("img");
const detailsContainer = document.getElementById("imageDetails");

//Add click event handler to image
image.forEach(function(image){

    image.addEventListener('click', function () {
        const imageDetails = image.getAttribute("id");
        console.log(imageDetails);
    //Display details in the desigated container
    detailsContainer.textContent = imageDetails;
});
})
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
//like heart
const likeButton = document.querySelectorAll("likeButton");
likeButton.addEventListener("click", function(){
    if(likeButton.classList.contains("like")){
        likeButton.classList.remove("like");
    }
    else {
        likeButton.classList.add("like")
    }
    })

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

// Swipper
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

// quill JS

