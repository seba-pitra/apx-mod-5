export function init() {
    class Header extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
            .header {
                height: 60px;
                width: 100%;
                background-color: #FF8282;
            }
            .header-text {
                font-family: 'Poppins', sans serif;
                font-size: 22px;
                font-weight: bold;
                text-align: center;
                padding: 15px 0;
                margin: 0;
                color: #000;
            }`
    
            let shadow = this.attachShadow({ mode: "open" })

            let header = document.createElement("header");
            let p = document.createElement("p");
                
            header.classList.add("header");
            p.classList.add("header-text");
    
            p.textContent = "Header";

            header.appendChild(p)
                
            shadow.appendChild(style);
            shadow.appendChild(header)
        }
    }
    customElements.define("header-el", Header)
}