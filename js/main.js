
{
    function showPassword() {
        
        let letter = "abcdefghijklmnopqrstuvwxyz";
        seed = letter + letter.toUpperCase();

        let result = document.getElementById("result");

        const numCheckbox = document.querySelector("[name=number-checkbox]");
        if (numCheckbox.checked) {
            seed += "1234567890";
        }
        const symbolCheckbox = document.querySelector("[name=symbol-checkbox]");
        if (symbolCheckbox.checked) {
            seed += "-^\@/\<>";
        }

        let password = "";
        for (let i=0; i<slidar.value; i++) {
            password += seed[Math.floor(Math.random() * seed.length)];
        }
        result.textContent = password;
    }

    let passwordLength = document.querySelector("[name=password-length]");

    let slidar = document.querySelector("[name=lenSlidar]");
    slidar.addEventListener("input", (e) => {
        passwordLength.textContent = slidar.value;
    });
    passwordLength.textContent = slidar.value;

    let passBtn = document.getElementById("passBtn");
    passBtn.addEventListener("click", () => {
        showPassword();
    });

    showPassword();
}

