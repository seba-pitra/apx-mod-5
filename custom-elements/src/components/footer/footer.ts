export function init() {
    class Footer extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
            .footer {
                height: 233px;
                width: 100%;
                background-color: #FFA0EA;
            }
            .footer-text {
                font-family: 'Poppins', sans serif;
                font-size: 22px;
                font-weight: bold;
                text-align: center;
                padding: 100px;
                margin: 0;
                color: #000;
            }`
    
            let shadow = this.attachShadow({ mode: "open" })
            let footer = document.createElement("footer");
            let p = document.createElement("p");
            
            footer.classList.add("footer");
            p.classList.add("footer-text");
    
            p.textContent = "footer";

            footer.appendChild(p)
                
            shadow.appendChild(style);
            shadow.appendChild(footer)
        }
    }
    customElements.define("footer-el", Footer)
}