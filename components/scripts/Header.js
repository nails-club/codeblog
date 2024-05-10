var current = false;
const mobile_nav_panel = document.getElementById("mobile-nav");

function toggleMobileHeader() {
    if (current == false) {
        mobile_nav_panel.classList.replace("mobile-nav-closed", "mobile-nav-opened");
    } else {
        mobile_nav_panel.classList.replace("mobile-nav-opened", "mobile-nav-closed");
    };
    
    current = !current
}