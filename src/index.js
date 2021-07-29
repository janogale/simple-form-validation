// validate name

function validateName(name) {
  if (!name) return false;

  return /^[a-zA-Z ]{3,20}$/.test(name);
}

function validateEmail(name) {
  if (!name) return false;

  return /^[a-zA-Z0-9_-]{3,20}@[a-zA-Z]{2,20}\.[a-zA-Z]{2,5}$/.test(name);
}

// captuer elements

let fName = document.getElementById("fname");
let email = document.getElementById("email");
let username = document.getElementById("username");
let phone = document.getElementById("fname");
let message = document.getElementById("message");

// validate inputs

fName.addEventListener("keyup", (e) => {
  let spanIcon = e.currentTarget.nextElementSibling;

  if (validateName(e.currentTarget.value)) {
    if (spanIcon) spanIcon.classList.remove("is-hidden");
    e.currentTarget.classList.remove("is-danger");
    e.currentTarget.classList.toggle("is-success");
    console.log("valid");
  } else {
    e.currentTarget.classList.remove("is-success");
    e.currentTarget.classList.toggle("is-danger");
    if (spanIcon) spanIcon.classList.add("is-hidden");
  }
});


username.addEventListener("keyup", (e) => {
  let spanIcon = e.currentTarget.nextElementSibling;

  if (validateName(e.currentTarget.value)) {
    if (spanIcon) spanIcon.classList.remove("is-hidden");
    e.currentTarget.classList.remove("is-danger");
    e.currentTarget.classList.toggle("is-success");
  } else {
    e.currentTarget.classList.remove("is-success");
    e.currentTarget.classList.toggle("is-danger");
    if (spanIcon) spanIcon.classList.add("is-hidden");
  }
});

email.addEventListener("keyup", (e) => {
  let spanIcon = e.currentTarget.nextElementSibling;

  if (validateEmail(e.currentTarget.value)) {
    if (spanIcon) spanIcon.classList.remove("is-hidden");
    e.currentTarget.classList.remove("is-danger");
    e.currentTarget.classList.toggle("is-success");
  } else {
    e.currentTarget.classList.remove("is-success");
    e.currentTarget.classList.toggle("is-danger");
    if (spanIcon) spanIcon.classList.add("is-hidden");
  }
});

