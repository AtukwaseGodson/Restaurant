document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Menu filtering functionality
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");

            const category = button.getAttribute("data-category");

            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`).classList.add('active');
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    const email = this[0].value;
    const password = this[1].value;
    console.log('Login:', email, password);
    // Add your login logic (e.g., API call)
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle signup logic here
    const name = this[0].value;
    const email = this[1].value;
    const password = this[2].value;
    console.log('Sign Up:', name, email, password);
    // Add your signup logic (e.g., API call)
});

function goBack() {
    window.history.back(); // This will take the user to the previous page
}
