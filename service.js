document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const button = document.getElementById('book');

    button.addEventListener('click', function() {
        window.location.href = 'index.html';
      });
    
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
});

/* Open */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
/* Close */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}