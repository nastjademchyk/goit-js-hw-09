const formData = {
  email: '',
  message: '',
};

const submitBtn = document.querySelector('.submit');
const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const handleForm = event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};
feedbackForm.addEventListener('input', handleForm);

const handleSubmit = event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  feedbackForm.reset();
};

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    feedbackForm.elements.email.value = formData.email;
    feedbackForm.elements.message.value = formData.message;
  }
});

feedbackForm.addEventListener('submit', handleSubmit);
