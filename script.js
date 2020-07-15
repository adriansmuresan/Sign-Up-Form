const form = document.getElementById('form');


form.addEventListener('submit', e => {
  e.preventDefault();
  
  const firstName =  form['firstname'].value;
  const lastName = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;
 
  if (firstName === '') {
    addErrorTo('firstname', 'First name is required');
  }

  if (lastName === '') {
    addErrorTo('lastname', 'Last Name cannot be empty');
  }

  if (isValid(email)) {
    addErrorTo('email', 'Email is not valid');
  }

  if (password === '') {
    addErrorTo('password', 'Password cannot be empty');
  }

});

function addErrorTo(field, message) {
  const small = form[field].parentNode.querySelector('small');
  small.innerText = message;
  small.style.opacity = 1;
}
