export function initHeader() {
    class Header extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            this.innerText = "Header";
            this.style.height ="60px;"
            this.style.backgroundColor = "#FF8282";
            this.style.fontSize = "22px";
            this.style.fontFamily = "'Poppins', sans-serif"
            this.style.display = "flex";
            this.style.justifyContent = "center";
            this.style.alignItems = "center";
        }
    }
    customElements.define("header-el", Header)
}