import { state } from "./state";
import { initFormComp } from "./components/form"
import { initListComp } from "./components/item-list"

(function main() {
    let root = document.querySelector(".root")
    //root.innerHTML = "<form-el></form-el>"
    
    initFormComp();
    initListComp();
})()
