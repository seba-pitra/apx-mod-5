import { state } from "../state";

export function initListComp() {
    class TodoList extends HTMLElement {
        shadow = this.attachShadow({ mode: "open" });
        nombre: string = "";
        constructor() {
            super();
        }
        connectedCallback() {
            state.subscribe(() => {
                this.render();
            })
        }
        render() {
            const list = state.getState().list;
            this.shadow.innerHTML = `
            <div style="border:solid 10px red">
              <ul>
                ${list.map(item => {
                    return `<li>${item}</li>`
                })
                .join("")}
              </ul>
            </div>
            `
        }
    }
    customElements.define("my-list", TodoList)
}