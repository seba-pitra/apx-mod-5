export function init() {
    class Text extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
            .container-text {
                max-width: 600px;
            }
            .p {
                font-family: 'Poppins', sans serif;
                font-size: 22px;
                font-weight: bold;
                padding: 100px;
                text-align: center;
            }`
    
            let shadow = this.attachShadow({ mode: "open" })

            let content = document.createElement("div");
            let p = document.createElement("p");
                
            content.classList.add("container-text");
            p.classList.add("p");
    
            p.textContent = "Texto del medio de la pagina resaltado.";

            content.appendChild(p)
                
            shadow.appendChild(style);
            shadow.appendChild(content)
        }
    }
    customElements.define("text-el", Text)
}