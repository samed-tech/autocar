document.addEventListener("DOMContentLoaded", () => {
    console.log("AutoCar başlatıldı.");

    const loginButton = document.querySelector(".login");
    const registerButton = document.querySelector(".register");

    if (loginButton) {
        loginButton.onclick = () => {
            alert("Giriş sistemi yakında eklenecek.");
        };
    }

    if (registerButton) {
        registerButton.onclick = () => {
            alert("Kayıt sistemi yakında eklenecek.");
        };
    }
});
