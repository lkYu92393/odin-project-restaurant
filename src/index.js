import init from './init.js';
import home from './page/home.js';
import signature from './page/signature.js';
import contact from './page/contact.js';

const clearContent = () => {
    const elem = document.getElementById("section-content");
    elem.innerHTML = "";
}

const loadPage = (page) => {
    clearContent();
    switch (page) {
        case "home":
            home();
            break;
        case "signature":
            signature();
            break;
        case "contact":
            contact();
            break;
        default:
            home();
            break;
    }
}

document.addEventListener("DOMContentLoaded", () => { 
    init();
    loadPage();

    document.getElementById("home-div").addEventListener("click", () => {
        loadPage("home");
    })

    document.getElementById("signature-div").addEventListener("click", () => {
        loadPage("signature");
    })

    document.getElementById("contact-div").addEventListener("click", () => {
        loadPage("contact");
    })
});