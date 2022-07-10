export function init() {
    class Subtitle extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
            .container-subtitle {
                padding: 0 30px;
                max-width: 600px;
            }

            .subtitle {
                font-family: 'Poppins', sans serif;
                font-size: 38px;
                font-weight: bold;
                margin: 0;
                text-align: left;
            }
            .text {
                font-family: 'Poppins', sans serif;
                font-size: 18px;
                padding: 20px 0 20px;
                text-align: left;
            }
            .`

            let shadow = this.attachShadow({ mode: "open" })
            
            let content = document.createElement("div");
            let subtitle = document.createElement("h3");
            let containerText = document.createElement("div");
            let firstText = document.createElement("p");
            let secondText = document.createElement("p");
            
            content.classList.add("container-subtitle");
            subtitle.classList.add("subtitle");
            firstText.classList.add("text");
            secondText.classList.add("text")

            subtitle.textContent = "Subtitulo"
            firstText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa reprehenderit quo voluptas, magni reiciendis molestiae sapiente nulla quaerat necessitatibus. Distinctio delectus, laboriosam officia aut quis modi praesentium quibusdam assumenda?"
            secondText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa reprehenderit quo voluptas, magni reiciendis molestiae sapiente nulla quaerat necessitatibus. Distinctio delectus, laboriosam officia aut quis modi praesentium quibusdam assumenda?"

            content.appendChild(subtitle)
            containerText.appendChild(firstText)
            containerText.appendChild(secondText)
            content.appendChild(containerText)
            
            shadow.appendChild(style);
            shadow.appendChild(content)
        }
    }
    customElements.define("subtitle-el", Subtitle)
}