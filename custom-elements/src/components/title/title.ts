export function init() {
    class Title extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
            .container-title {
                margin-top: 40px;
                min-height: 65px;
                max-width: 600px;
            }

            .title {
                font-family: 'Poppins', sans serif;
                font-size: 52px;
                font-weight: bold;
                margin: 0;
                text-align: center;
            }
            .text-intro {
                font-family: 'Poppins', sans serif;
                font-size: 22px;
                margin: 20px 0 70px;
                text-align: center;
            }
            .`

            let shadow = this.attachShadow({ mode: "open" })
            
            let div = document.createElement("div");
            let title = document.createElement("h1");
            let textIntro = document.createElement("p");
            
            div.classList.add("container-title");
            title.classList.add("title");
            textIntro.classList.add("text-intro");

            title.textContent = "Titulo de esta pagina"
            textIntro.textContent = "Esta pagina es la mejor sin dudas"
            div.appendChild(title)
            div.appendChild(textIntro)
            
            shadow.appendChild(style);
            shadow.appendChild(div)
        }
    }

    customElements.define("title-el", Title)
}