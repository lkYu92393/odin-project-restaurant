export default () => {
    const elem = document.getElementById("section-content");
    const paragraphElem = (name, phone, email) => {
        return `<div class="paragraph">
        ${name}<br />
        ${phone}<br />
        ${email}
    </div>`
    }
    elem.innerHTML = 
    `<div id="contact">
        <div class="header">Contact Us</div>
        ${paragraphElem("Behemoth" , "0000 0000", "behemoth@altesiaCafeteria")}
        ${paragraphElem("Beshemoth", "0000 1000", "beshemoth@altesiaCafeteria")}
        ${paragraphElem("Bedemoth" , "1000 0000", "bedemoth@altesiaCafeteria")}
    </div>`
}