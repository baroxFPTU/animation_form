const inputs = document.querySelectorAll('.form .form-group .form-element');

inputs.forEach((input) => {
    let formGroup = input.parentNode;

    input.addEventListener('focus', () => {
        formGroup.classList.add('is-active');
    })

    input.addEventListener('blur', () => {
        if (input.value === '') {
            formGroup.classList.remove('is-active');
        }
    })
})