function checker() {
    const emailInput = document.getElementById("email-id");
    const icon = document.getElementById("icon");
    const errorMsg = document.getElementById("error-msg");

    // Email pattern (basic & reliable)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value === "") {
        icon.innerHTML = "";
        emailInput.classList.remove("valid", "invalid");
        errorMsg.classList.remove("show");
        return;
    }

    if (emailPattern.test(emailInput.value)) {
        icon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
        errorMsg.classList.remove("show");
    } else {
        icon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        errorMsg.classList.add("show");
    }
}
