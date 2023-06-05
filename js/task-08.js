function onSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return;
    }

    const rezObj = {
        email: email.value,
        password: password.value,
    };

    console.log(rezObj);

    event.currentTarget.reset();
}

const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);
