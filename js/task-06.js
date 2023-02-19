const input = document.querySelector('#validation-input');

  input.addEventListener('blur', () => {
    const inputValue = input.value;
    const requiredLength = input.dataset.length;

    if (inputValue.length === Number(requiredLength)) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
    }
  });