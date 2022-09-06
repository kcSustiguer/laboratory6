const Form = document.querySelector('#form');
const Firstnameinput = document.querySelector('#first');
const Middleinitialinput = document.querySelector('#middle');
const Lastnameinput = document.querySelector('#last');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

Form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(Firstnameinput.value == '' || Middleinitialinput.value == ''|| Lastnameinput.value == '' || emailInput.value == '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {

alert("Sucess!")
}
}
