export default () => {
    const elem = document.getElementById("content");
    elem.innerHTML = `
    <navbar>
        <div id="home-div">Home</div>
        <div id="signature-div">Signature Dish</div>
        <div id="contact-div">Contact and Location</div>
    </navbar>
    <section>
        <div id="section-content">
        </div>
    </section>
    <footer>
        Altesia cafeteria, a restaurant on a remote city, Altesia
    </footer>
    `;
}