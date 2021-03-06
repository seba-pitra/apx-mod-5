export function init() {
    class Form extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
           .form-container {
                max-width: 600px;
                padding: 0 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
                font-family: 'Poppins', sans-serif;
            }
            .label {
                display: block;
            }
            .input {
                height: 55px;
                width: 312px;
                font-size: 18px;
                border: solid 2px;
                border-radius: 3px;
            }
            .first-button {
                background-color: #9CBBE9;
                height: 55px;
                width: 312px;
                border: none;
                border-radius: 3px;
                font-size: 18px;
            }
            .second-button {
                height: 55px;
                width: 312px;
                border: solid 2px;
                border-radius: 3px;
                font-size: 18px;
                margin: 70px 0 60px;
            }`;
    
            let shadow = this.attachShadow({ mode: "open" })
            let label = this.getAttribute("label");

            let formContainer = document.createElement("div"); 
            formContainer.classList.add("form-container");
            
            formContainer.innerHTML = `
            <div class="root">
               <label class="label">${label}</label>
               <input class="input" type="text" placeholder="Ingrese su ${label}">
            </div>`
            
            let firstButton = document.createElement("button");
            let secondButton = document.createElement("button");

            firstButton.classList.add("first-button");
            secondButton.classList.add("second-button");

            firstButton.textContent = "Enviar";
            secondButton.textContent = "Volver";

            formContainer.appendChild(firstButton);
            formContainer.appendChild(secondButton);
                
            shadow.appendChild(style);
            shadow.appendChild(formContainer);
        }
    }
    customElements.define("form-el", Form)
}