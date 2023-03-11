// function validate() {
//    const username = document.getElementById("username");
//    const email = document.getElementById("email");
//    const password = document.getElementById("password");
//    const confirmPassword = document.getElementById("confirm-password");
//    const company = document.getElementById("company");
//    const companyNumber = document.getElementById("companyNumber");
//    const submit = document.getElementById("submit");
//    const companyInfo = document.getElementById("companyInfo");

//    const usernamePattern = /^[a-zA-z0-9]{3,20}$/g;
//    const passwordPattern = /^[a-zA-z0-9]{5,15}$/g;

//    if(!username.value.match(usernamePattern)) {
//     username.style['border-color'] = 'red';
//    }else {
//     username.style['border'] = 'none';
//    }

//    if(!password.value.match(passwordPattern) || password.value !== confirmPassword) {
//     password.style['border-color'] = 'red';
//    }else {
//     password.style['border'] = 'none';
//    }

//    const hasAt = false;
//    const hasDot = false;

//    for (let i = 0; i < email.value; i++) {
//     const element = email.value[i];

//     if(element === '@') {
//         hasAt = true;
//     }

//     if(hasAt && element === '.') {
//         hasDot = true;
//         break;
//    } 
//    }

//    if(!hasDot) {
//     email.style['border-color'] = 'red';
//    }else {
//     email.style['border'] = 'none';
//    }

//    if(company.checked) {
//     companyInfo.style.display = 'block';
//     if(typeof(companyNumber.value) === 'number') {

//     }
//     companyNumber.value
//    }else {
//     companyInfo.style.display = 'none';
//    }

// }

// function validate() {
//     const username = document.querySelector('#username');
//     const email = document.querySelector('#email');
//     const password = document.querySelector('#password');
//     const confirmPassword = document.querySelector('#confirm-password');
//     const companyCheckbox = document.querySelector('#company');
//     const companyInfo = document.querySelector('#companyInfo');
//     const companyNumber = document.querySelector('#companyNumber');
//     const submitButton = document.querySelector('#submit');
//     const valid = document.querySelector('#valid');

//     companyCheckbox.addEventListener('change', function () {
//         if (this.checked) {
//             companyInfo.style.display = "block";
//         } else {
//             companyInfo.style.display = "none";
//         }
//     });

//     submitButton.addEventListener('click', function (e) {
//         e.preventDefault();
//         let isValid = true;

//         const usernameValue = username.
// value.trim();
// if (!/^[a-zA-Z0-9]+$/.test(usernameValue) || usernameValue.length < 3 || usernameValue.length > 20) {
// username.style.borderColor = 'red';
// isValid = false;
// } else {
// username.style.border = 'none';
// }

//     const emailValue = email.value.trim();
//     if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
//         email.style.borderColor = 'red';
//         isValid = false;
//     } else {
//         email.style.border = 'none';
//     }

//     const passwordValue = password.value.trim();
//     const confirmPasswordValue = confirmPassword.value.trim();
//     if (!/^\w+$/.test(passwordValue) || passwordValue.length < 5 || passwordValue.length > 15 || passwordValue !== confirmPasswordValue) {
//         password.style.borderColor = 'red';
//         confirmPassword.style.borderColor = 'red';
//         isValid = false;
//     } else {
//         password.style.border = 'none';
//         confirmPassword.style.border = 'none';
//     }

//     if (companyCheckbox.checked) {
//         const companyNumberValue = companyNumber.value.trim();
//         if (isNaN(companyNumberValue) || companyNumberValue < 1000 || companyNumberValue > 9999) {
//             companyNumber.style.borderColor = 'red';
//             isValid = false;
//         } else {
//             companyNumber.style.border = 'none';
//         }
//     }

//     if (isValid) {
//         valid.style.display = 'block';
//     } else {
//         valid.style.display = 'none';
//     }
// })};


function validate() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const company = document.getElementById("company");
    const companyNumber = document.getElementById("companyNumber");
    const submit = document.getElementById("submit");
    const valid = document.getElementById("valid");
    const companyInfo = document.getElementById("companyInfo");
    
    company.addEventListener("change", () => {
    if (company.checked) {
    companyInfo.style.display = "block";
    } else {
    companyInfo.style.display = "none";
    }
    });
    
    const validateUsername = () => {
    const re = /^[a-zA-Z0-9]+$/;
    if (username.value.length < 3 || username.value.length > 20 || !re.test(username.value)) {
    username.style.borderColor = "red";
    return false;
    }
    username.style.border = "none";
    return true;
    };
    
    const validatePassword = () => {
    const re = /^\w+$/;
    if (password.value.length < 5 || password.value.length > 15 || !re.test(password.value)) {
    password.style.borderColor = "red";
    return false;
    }
    password.style.border = "none";
    return true;
    };
    
    const validateConfirmPassword = () => {
    if (password.value !== confirmPassword.value) {
    confirmPassword.style.borderColor = "red";
    return false;
    }
    confirmPassword.style.border = "none";
    return true;
    };
    
    const validateEmail = () => {
    const re = /^[^@]+@[^.]+..+$/;
    if (!re.test(email.value)) {
    email.style.borderColor = "red";
    return false;
    }
    email.style.border = "none";
    return true;
    };
    
    const validateCompanyNumber = () => {
    if (company.checked && (companyNumber.value < 1000 || companyNumber.value > 9999)) {
    companyNumber.style.borderColor = "red";
    return false;
    }
    companyNumber.style.border = "none";
    return true;
    };
    

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        
        let isValid = true;
        isValid = validateUsername() && isValid;
        isValid = validatePassword() && isValid;
        isValid = validateConfirmPassword() && isValid;
        isValid = validateEmail() && isValid;
        isValid = validateCompanyNumber() && isValid;
        
        if (isValid) {
          valid.style.display = "block";
        } else {
          valid.style.display = "none";
        }
        });
};
