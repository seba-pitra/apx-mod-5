(function main() {
    class prueba extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let shadow = this.attachShadow({
                mode: "open"
            });
        }
    }
    customElements.define("prueba-el", prueba);
})();

//# sourceMappingURL=index.377278e2.js.map
