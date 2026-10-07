const form = document.querySelector("#contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    let result = document.querySelector("#result");

    if (name == "" || email == "" || message == "") {

        result.innerHTML = "Please fill all the fields.";
        result.style.color = "red";

    }
    else if (!email.includes("@")) {

        result.innerHTML = "Please enter a valid email.";
        result.style.color = "red";

    }
    else {

        result.innerHTML = "Thank you! Your message has been submitted.";
        result.style.color = "green";

    }

});