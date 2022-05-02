



// Code to check the error states in the contact form
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector('.full-name');
    const email = document.querySelector(".email");

    if (name.value === "") {
        name.classList.add('error')
        name.placeholder = "Name field can't be empty";
    } else {
        name.classList.remove("error");
    }
    
    if (!isValid(email)) {
        email.classList.add("error");
        email.placeholder = "Please enter a valid email";
    } else if (email.value === "") {
        email.classList.add("error");
        email.placeholder = "Please enter an email";
     
    }  else {
        email.classList.remove("error");
    }

});

function isValid(email) {
    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
