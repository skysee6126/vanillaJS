const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "username"

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(CLASSNAME_HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    afterLogin(username)
}

function afterLogin(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    afterLogin(savedUsername);
}

