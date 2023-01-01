let formEmail = document.getElementById('email');
let formSubmit = document.getElementById('submit-button');
let formInvalidMessage = document.getElementById('input-error');

let isFormValid = false;

function updateFormValidation() {
	if (isFormValid) {
		formInvalidMessage.style.display = 'none';
		formEmail.classList.remove('access-input-error');
	} else {
		formInvalidMessage.style.display = 'block';
		formEmail.classList.add('access-input-error');
	}
}

formEmail.addEventListener('input', (e) => {
	isFormValid = e.target.validity.valid;
	updateFormValidation();
}, false);

formSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	updateFormValidation();
}, false);