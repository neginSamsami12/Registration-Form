let rankCounter = 0;
const container_form = document.querySelector(".container_form");
const form = document.querySelector("#form");
const full_name = document.querySelector(".full_name");
const age = document.querySelector(".age");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirm_password = document.querySelector(".confirm_password");
const icon_pass = document.querySelector(".icon_pass");
const icon_confirmPass = document.querySelector(".icon_confirmPass");

// error

const e_fullName = document.querySelector(".e_fullName");
const e_phone = document.querySelector(".e_phone");
const e_age = document.querySelector(".e_age");
const e_email = document.querySelector(".e_email");
const e_password = document.querySelector(".e_password");
const e_confirm_password = document.querySelector(".e_confirm_password");

//message

const container_message = document.querySelector(".container_message");
const icon_final = document.querySelector(".icon_final");
const title_final = document.querySelector(".title_final");

// validate pattern

const isFullNameRegex = /^[A-Za-z\u0600-\u06FF\s]+$/;
// const isFullNameRegex = /^[A-Za-z\s]+$/;
const isPhoneRegex = /^09[0-9]{9}$/;
const isAgeRegex = /^(1[5-9]|[2-9][0-9]|100)$/;
const isEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
const isPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//form submit

form.addEventListener("submit", processFormData);

// icon pass
let iconPass = true;

if (icon_pass && password) {
    icon_pass.addEventListener("click", () => {
        if (iconPass) {
            password.type = "text";
            icon_pass.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                             </svg>`;
            iconPass = false;
        } else {
            password.type = "password";
            icon_pass.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>`;
            iconPass = true;
        }
    });
}

// icon confirm pass
let iconConfirmPass = true;

if (icon_confirmPass && confirm_password) {
    icon_confirmPass.addEventListener("click", () => {
        if (iconConfirmPass) {
            confirm_password.type = "text";
            icon_confirmPass.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                             </svg>`;
            iconConfirmPass = false;
        } else {
            confirm_password.type = "password";
            icon_confirmPass.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>`;
            iconConfirmPass = true;
        }
    });
}

// full name

full_name.addEventListener("input", () => {
    if (!isFullNameRegex.test(full_name.value.trim())) {
        full_name.style.borderBottom = "3px solid #ff0000";
        e_fullName.textContent = "Full name must contain only letters en.";
    } else {
        full_name.style.borderBottom = "3px solid green";
        e_fullName.textContent = "";
    }
});

// phone

phone.addEventListener("input", () => {
    phone.value = phone.value.replace(/\D/g, "");

    if (phone.value.length > 11) {
        phone.value = phone.value.slice(0, 11);
    }

    if (!isPhoneRegex.test(phone.value.trim())) {
        phone.style.borderBottom = "3px solid #ff0000";
        e_phone.textContent = "Phone number must be 11 digits and start with 09.";
    } else {
        phone.style.borderBottom = "3px solid green";
        e_phone.textContent = "";
    }
});

// Age 
age.addEventListener("input", () => {
    age.value = age.value.replace(/\D/g, ""); // Allow only numbers

    if (!isAgeRegex.test(age.value.trim())) {
        age.style.borderBottom = "3px solid #ff0000";
        e_age.textContent = "Age must be a number between 15 and 100.";
    } else {
        age.style.borderBottom = "3px solid green";
        e_age.textContent = "";
    }
});

// email

email.addEventListener("input", () => {
    if (!isEmailRegex.test(email.value.trim())) {
        email.style.borderBottom = "3px solid #ff0000";
        e_email.textContent = "Please enter a valid email address.";
    } else {
        email.style.borderBottom = "3px solid green";
        e_email.textContent = "";
    }
});

// password

password.addEventListener("input", () => {
    if (!isPasswordRegex.test(password.value.trim())) {
        password.style.borderBottom = "3px solid #ff0000";
        e_password.textContent =
            "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character (@, #, !, etc.)";
    } else {
        password.style.borderBottom = "3px solid green";
        e_password.textContent = "";
    }
});

// confirm password

confirm_password.addEventListener("input", () => {
    if (
        confirm_password.value !== password.value ||
        confirm_password.value === ""
    ) {
        confirm_password.style.borderBottom = "3px solid #ff0000";
        e_confirm_password.textContent = "Passwords do not match.";
    } else {
        confirm_password.style.borderBottom = "3px solid green";
        e_confirm_password.textContent = "";
    }
});

// process form data

function processFormData(e) {
    e.preventDefault();
    validateForm();
}

// validate form

function validateForm() {
    let isValidate = true;

    // delete message error
    e_fullName.textContent = "";
    e_phone.textContent = "";
    e_age.textContent = "";
    e_email.textContent = "";
    e_password.textContent = "";
    e_confirm_password.textContent = "";

    // full name
    if (!isFullNameRegex.test(full_name.value.trim())) {
        full_name.style.borderBottom = "3px solid #ff0000";
        e_fullName.textContent = "Full name must contain only letters (English).";
        isValidate = false;
    }

    // phone
    if (!isPhoneRegex.test(phone.value.trim())) {
        phone.style.borderBottom = "3px solid #ff0000";
        e_phone.textContent = "Phone number must be 11 digits and start with 09.";
        isValidate = false;
    }

    // age
    if (!isAgeRegex.test(age.value.trim())) {
        age.style.borderBottom = "3px solid #ff0000";
        e_age.textContent = "Age must be a number between 15 and 100.";
        isValidate = false;
    }

    // email
    if (!isEmailRegex.test(email.value.trim())) {
        email.style.borderBottom = "3px solid #ff0000";
        e_email.textContent = "Please enter a valid email address.";
        isValidate = false;
    }

    // password
    if (!isPasswordRegex.test(password.value.trim())) {
        password.style.borderBottom = "3px solid #ff0000";
        e_password.textContent =
            "Password must be at least 8 characters long, with uppercase, lowercase, a number, and a special character.";
        isValidate = false;
    }

    // confirm password
    if (
        confirm_password.value !== password.value ||
        confirm_password.value === ""
    ) {
        confirm_password.style.borderBottom = "3px solid #ff0000";
        e_confirm_password.textContent = "Passwords do not match.";
        isValidate = false;
    }

    // final form

    if (isValidate) {

        document.getElementById('table-body').innerHTML += "<tr>" +
            `<td>${++rankCounter}</td>` +
            `<td>${full_name.value}</td>` +
            `<td>${email.value}</td>` +
            `<td>${age.value}</td>` +
            `<td>${phone.value}</td>` +
            "</tr>"


        setTimeout(() => {
            container_form.style.filter = "blur(1.8px)";
            container_message.style.display = "flex";
            container_message.style.visibility = "visible";
        }, 300);

        setTimeout(() => {
            icon_final.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>`;
            title_final.textContent = "Form submitted successfully!";
        }, 600);

        setTimeout(() => {
            form.reset();

            full_name.style.borderBottom = "";
            phone.style.borderBottom = "";
            age.style.borderBottom = "";
            email.style.borderBottom = "";
            password.style.borderBottom = "";
            confirm_password.style.borderBottom = "";
        }, 900);

        setTimeout(() => {
            container_form.style.filter = "blur(0px)";
            container_message.style.display = "none";
            container_message.style.visibility = "hidden";
        }, 1500);
        setTimeout(() => {
            document.getElementById('flipbox-mainframe').classList.add("flip-box-active");
        }, 2000);
    }
}

document.getElementById('reset-flip-button').addEventListener('click' , ev => {
    document.getElementById('flipbox-mainframe').classList.remove("flip-box-active");

})