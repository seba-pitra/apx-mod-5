export function initTextField(params) {
    customElements.define(
        "text-field",
        class extends HTMLElement {
            constructor() {
                super();
                this.render();
            }
            render() {
                let style = document.createElement("style");
                style.textContent = `
                .form-intro-text {
                    margin: 0;
                    padding: 73px 30px 30px;  
                    font-size: 22px;
                    font-weight: bold;
                }
               
                .form-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    max-width: 600px;
                    padding: 0 30px;
                    font-family: 'Poppins', sans-serif;
                }
                .label {
                    display: block;
                    padding: 0;
                    text-align: left;
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
                    margin-bottom: 113px;
                    font-weight: bold;
                }`;
        
                let shadow = this.attachShadow({ mode: "open" })
                let label = this.getAttribute("label");
                
                let formContainer = document.createElement("div"); 
                formContainer.classList.add("form-container");
        
                formContainer.innerHTML = `
                <p class="form-intro-text">
                Para continuar, por favor ingrese su nombre
                </p>
                <div class="root">
                   <label class="label">
                        <custom-text variant="body">${label}</custom-text>
                   </label>
                   <input class="input" type="text" placeholder="Ingrese su nombre">
                </div>
                `
                let firstButton = document.createElement("button");
                firstButton.classList.add("first-button");
                firstButton.textContent = "Comenzar";
                formContainer.appendChild(firstButton);
                
               firstButton.addEventListener("click", () => {
                    params.goTo("/b")
               })
                    
                shadow.appendChild(style);
                shadow.appendChild(formContainer);
            }
        })
}

export function initTextFieldB(params) {
    class FormB extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
            .form-intro-text {
                margin: 0;
                padding: 73px 30px 30px;  
                font-size: 22px;
                font-weight: bold;
            }
           
            .form-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
                max-width: 600px;
                padding: 0 30px;
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
                margin-bottom: 70px;
                font-weight: bold;
            }
            .second-button {
                background-color: #fff;
                height: 55px;
                width: 312px;
                border: solid 2px;
                border-radius: 3px;
                font-size: 18px;
                margin-bottom: 113px;
                font-weight: bold;
            }
            .select {
                height: 55px;
                width: 312px;
                font-size: 18px
            }`;
    
            let shadow = this.attachShadow({ mode: "open" })
    
            let formContainer = document.createElement("div"); 
            formContainer.classList.add("form-container");
            
            formContainer.innerHTML = `
            <p class="form-intro-text">
            Para continuar, por favor ingrese su nombre
            </p>
            <div class="root">
               <label class="label">Email</label>
               <input class="input" type="email">
            </div>
            <div class="root">
               <label class="label">Comida favorita</label>
               <input class="input" type="text">
            </div>
            <div class="root">
               <label class="label">Alguna de estas tres opciones</label>
               <select class="select">
                  <option>Piedra</option>
                  <option>Papel</option>
                  <option>Tijera</option>
               </select>
            </div>
            `
            let firstButton = document.createElement("button");
            firstButton.classList.add("first-button");
            firstButton.textContent = "Continuar";
            
            let secondButton = document.createElement("button");
            secondButton.classList.add("second-button");
            secondButton.textContent = "Volver";
            
            formContainer.appendChild(firstButton);
            formContainer.appendChild(secondButton);
            
           firstButton.addEventListener("click", () => {
                params.goTo("/c")
           })
           secondButton.addEventListener("click", () => {
            params.goTo("/a")
           })

                
            shadow.appendChild(style);
            shadow.appendChild(formContainer);
        }
    }
    customElements.define("formulario-el", FormB)
}

export function initTextFieldC(params) {
    class FormC extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
            .form-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
                max-width: 600px;
                padding: 0 30px;
                font-family: 'Poppins', sans-serif;
            }
            .button {
                background-color: #9CBBE9;
                height: 55px;
                width: 312px;
                border: none;
                border-radius: 3px;
                font-size: 18px;
                margin:100px 0 312px;
                font-weight: bold;"
            }
            .title {
                padding: 30px;
                margin: 0;
                font-family: 'Poppins', sans serif;
                font-size: 52px;
                font-weight: bold;
                text-align: center;
            }
            .text {
                margin: 0;
                padding: 0 30px;
                font-size:18px;
                text-align:center;
                font-weight: bold;
                font-family:'Poppins'
            }
            `;
    
            let shadow = this.attachShadow({ mode: "open" })
    
            let formContainer = document.createElement("div"); 
            formContainer.classList.add("form-container");
            
            formContainer.innerHTML = `
            <h1 class="title">Gracias!</h1>
            <p class="text">Toda la informacion que nos brindaste es muy importante</p>
            `
            let firstButton = document.createElement("button");
            firstButton.classList.add("button");
            firstButton.textContent = "De nada";
            
            firstButton.addEventListener("click", () => {
                params.goTo("/a")
            })

            formContainer.appendChild(firstButton);
                
            shadow.appendChild(style);
            shadow.appendChild(formContainer);
        }
    }
    customElements.define("agradecimiento-el", FormC)
}