const panelBtn = document.querySelectorAll(".panel-btn");
const container = document.querySelector(".container");
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const eyebuttons = document.querySelectorAll(".eye-btn");
const navigateLinks = document.querySelectorAll(".navigate-link");
const loginEmailInput = document.getElementById("login-email-input");
const loginEmailAlert = document.getElementById("login-email-alert");
const loginPasswordInput = document.getElementById("login-password-input");
const loginPasswordAlert = document.getElementById("login-password-alert");
const registerEmailInput = document.querySelector("#register-email-input");
const registerEmailAlert = document.querySelector("#register-email-alert");
const registerConfirmPasswordInput = document.querySelector(
  "#register-confirm-password-input",
);
const registerConfirmPasswordAlert = document.querySelector(
  "#register-confirm-password-alert",
);
const registerPasswordInput = document.querySelector(
  "#register-password-input",
);
const registerPasswordAlert = document.querySelector(
  "#register-password-alert",
);
const formTitle = document.querySelector(".form-title");

panelBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    container.classList.toggle("active");
  });
});

loginBtn.addEventListener("click", () => {
  registerBtn.classList.remove("active");
  loginBtn.classList.add("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  formTitle.textContent = "Sign In";
});

registerBtn.addEventListener("click", () => {
  loginBtn.classList.remove("active");
  registerBtn.classList.add("active");
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  formTitle.textContent = "Sign Up";
});

eyebuttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const input = btn.previousElementSibling;
    const icon = btn.querySelector("i");
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
});

navigateLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault();
    const dataLink = links.dataset.link;
    if (dataLink === "register") {
      registerBtn.click();
    } else if (dataLink === "login") {
      loginBtn.click();
    }
  });
});

const emailFormat =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

loginForm.addEventListener("submit", (e) => {
  if (!validateLoginForm()) {
    e.preventDefault();
  }
});

loginEmailInput.addEventListener("input", () => {
  if (!loginEmailInput.value.match(emailFormat)) {
    loginEmailInput.classList.add("wrong-input");
    loginEmailAlert.textContent = "Enter valid email! 😱";
  } else {
    loginEmailInput.classList.remove("wrong-input");
    loginEmailAlert.textContent = "";
  }
});

loginPasswordInput.addEventListener("input", () => {
  if (loginPasswordInput.value.length < 6) {
    loginPasswordInput.classList.add("wrong-input");
    loginPasswordAlert.textContent = "Enter more than 6 characters! 😱";
  } else {
    loginPasswordInput.classList.remove("wrong-input");
    loginPasswordAlert.textContent = "";
  }
});

const validateLoginForm = () => {
  if (!loginEmailInput.value.match(emailFormat)) {
    loginEmailInput.classList.add("wrong-input");
    loginEmailAlert.textContent = "Enter valid email! 😱";
    return false;
  }
  if (loginPasswordInput.value.length < 6) {
    loginPasswordInput.classList.add("wrong-input");
    loginPasswordAlert.textContent = "Enter more than 6 characters! 😱";
    return false;
  }
  return true;
};

registerForm.addEventListener("submit", (e) => {
  if (!validateRegisterForm()) {
    e.preventDefault();
  }
});

registerEmailInput.addEventListener("input", () => {
  if (!registerEmailInput.value.match(emailFormat)) {
    registerEmailInput.classList.add("wrong-input");
    registerEmailAlert.textContent = "Enter valid email! 😱";
  } else {
    registerEmailInput.classList.remove("wrong-input");
    registerEmailAlert.textContent = "";
  }
});

registerPasswordInput.addEventListener("input", () => {
  if (registerPasswordInput.value.length < 6) {
    registerPasswordInput.classList.add("wrong-input");
    registerPasswordAlert.textContent = "Enter more than 6 characters! 😱";
  } else {
    registerPasswordInput.classList.remove("wrong-input");
    registerPasswordAlert.textContent = "";
  }
});

registerConfirmPasswordInput.addEventListener("input", () => {
  if (registerConfirmPasswordInput.value.length < 6) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.textContent =
      "Enter more than 6 characters! 😱";
  } else if (
    registerConfirmPasswordInput.value !== registerPasswordInput.value
  ) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.textContent = "Passwords don't match! 🎃";
  } else {
    registerConfirmPasswordInput.classList.remove("wrong-input");
    registerConfirmPasswordAlert.textContent = "";
  }
});

const validateRegisterForm = () => {
  if (!registerEmailInput.value.match(emailFormat)) {
    registerEmailInput.classList.add("wrong-input");
    registerEmailAlert.textContent = "Enter valid email! 😱";
    return false;
  }
  if (registerPasswordInput.value.length < 6) {
    registerPasswordInput.classList.add("wrong-input");
    registerPasswordAlert.textContent = "Enter more than 6 characters! 😱";
    return false;
  }
  if (registerConfirmPasswordInput.value.length < 6) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.textContent =
      "Enter more than 6 characters! 😱";
    return false;
  } else if (
    registerConfirmPasswordInput.value !== registerPasswordInput.value
  ) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.textContent = "Passwords don't match! 🎃";
    return false;
  }
  return true;
};
