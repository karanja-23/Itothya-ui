const login = document.getElementById("login");
const serviceBtn = document.getElementById("button");
const mobile_menu = document.querySelector('.fa.fa-bars')
const close = document.querySelector('.fa.fa-window-close')
const loginBtn = document.getElementById("login_button");
const menuItems  = document.querySelectorAll('#mobile_menu a');

// redirect user to google form for login
login.addEventListener("click", () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSesLetn1rd5mn6iwEnSFe4dFH5jwhlFK-zP5PDPu5lMtrCZuQ/viewform?embedded=true";
})

// redirect user to services 
serviceBtn.addEventListener("click", () => {
    window.location.href = "#services";
})

// open mobile view menu
mobile_menu.addEventListener("click", () => {
    document.getElementById("mobile_nav").style.display = "block";
})

//close mobile view menu
close.addEventListener("click", () => {
    document.getElementById("mobile_nav").style.display = "none";
})

// redirect user to google form for login
loginBtn.addEventListener("click", () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSesLetn1rd5mn6iwEnSFe4dFH5jwhlFK-zP5PDPu5lMtrCZuQ/viewform?embedded=true";
})

//close mobile view menu and redirect user to selected section
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        document.getElementById("mobile_nav").style.display = "none";
        window.location.href = item.getAttribute("href");
    })
})