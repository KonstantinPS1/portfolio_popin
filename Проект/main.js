const form = document.querySelector('form');
const name = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const message = document.getElementById('message');
const button = document.getElementById('button');

function sendForm() {
    if (name === '' || age === '' || email === '' ||  message === '') {
        alert('Пожалуйста, заполните все поля');
    } else {
        console.log(name.value, age.value, email.value, message.value);
        name.value === "";
        age.value === "";
        email.value === "";
        message.value === "";
        form.innerHTML = '<h1>Сообщение отправлено!</h1>';
        button.style = "display: none;";
    }
}