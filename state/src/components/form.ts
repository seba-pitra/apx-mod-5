import { state } from "../state";

export function initFormComp() {
    class Form extends HTMLElement {
        shadow = this.attachShadow({ mode: "open" });
        nombre: string = "";
        constructor() {
            super();
            this.render();
        }
        connectedCallback() {
            const form = this.shadow.querySelector(".form") as any
            form.addEventListener("submit",(e)=> {
                e.preventDefault();
                const f = e.target as any;
                
                state.addItem(f.text.value)
            })
        }
        syncWithState() {
            const lastState = state.getState();
            this.nombre = lastState.nombre || "";
            this.render();
        }
        render() {
            this.shadow.innerHTML = `
            <form class="form">
              <input type="text" class="input" placeholder="Nuevo pendiente">
              <button class="button">+</button>
            </form>
            `
        }
    }
    customElements.define("form-el", Form)
}