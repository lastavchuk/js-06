function onSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Please fill in all the fields!');
        return;
    }

    const rezObj = {
        email: email.value,
        password: password.value,
    };

    console.log(rezObj);

    event.currentTarget.reset();
}

const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);
