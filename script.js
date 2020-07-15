const form = document.getElementById('form');


form.addEventListener('submit', e => {
  e.preventDefault();
  
  const firstName =  form['firstname'].value;
  const lastName = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;
 
  if (firstName === '') {
    const small = form['firstname'].parentNode.querySelector('small');
    small.innerText = 'First Name cannot be empty';
    small.style.opacity = 1;
  }
  
});
