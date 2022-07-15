export function initFooter() {
    class Footer extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
                 
            let shadow = this.attachShadow({ mode: "open" })
            let footer = document.createElement("footer");
            let p = document.createElement("p");
            p.textContent = "Footer"

            footer.style.height ="233px;"
            footer.style.backgroundColor = "#FFA0EA";
            footer.style.fontSize = "22px";
            footer.style.fontWeight = "bold"
            footer.style.fontFamily = "'Poppins', sans-serif"
            
            p.style.fontFamily = "'Poppins', sans serif;"
            p.style.fontWeight = "bold";
            p.style.textAlign = "center";
            p.style.padding = "100px"
            p.style.margin = "0px"

            
            footer.appendChild(p)
            shadow.appendChild(footer)
            shadow.appendChild(style);
        }
    }
    customElements.define("footer-el", Footer)
}