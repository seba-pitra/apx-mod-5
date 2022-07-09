(function main() {
    class title extends HTMLElement {
        constructor() {
            super();
            this.textContent = "soy constructor"
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
            .container-title {
                min-height: 65px;
                max-width: 600px;
            }
            .title {
                font-family: 'Poppins', sans serif;
                font-size: 52px;
                margin: 0;
                text-align: center;
            }`

            let shadow = this.attachShadow({ mode: "open" })
            shadow.appendChild(style);

            let div = document.createElement("div");
            let title = document.createElement("h1");
            
            div.classList.add("container-title")
            title.classList.add("title")
            title.textContent = "Titulo de esta pagina"
            div.appendChild(title)

            shadow.appendChild(div)
        }
    }

    customElements.define("title-el", title)
})()