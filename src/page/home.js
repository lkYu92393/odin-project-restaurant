export default () => {
    const elem = document.getElementById("section-content");
    elem.innerHTML = 
    `<div id="home">
        <div class="header">Altesia Cafeteria</div>
        <div class="paragraph">
            Altesia Cafeteria is a restaurant offering the best seafood. It also boosts a very nice view of our beloved city.
        </div>
        <div class="paragraph">
            <div>Opening Hour</div>
            <div>
                <div>
                    Weekdays: 12:00 - 22:00
                </div>
                <div>
                    Weekends: 12:00 - 24:00
                </div>
            </div>
        </div>
        <div class="paragraph">
            <div>Location</div>
            <div>183 Sea Avenue, Altesia</div>
        </div>
    </div>`
}