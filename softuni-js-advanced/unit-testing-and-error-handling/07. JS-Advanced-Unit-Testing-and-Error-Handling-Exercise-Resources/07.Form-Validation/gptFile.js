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
        
