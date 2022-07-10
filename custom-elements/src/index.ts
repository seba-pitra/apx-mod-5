import { init as titleComp } from "./components/title/title";
import { init as subtitleComp } from "./components/subtitle/subtitle";
import { init as mediumTextComp } from "./components/medium-text/medium-text";
import { init as headerComp } from "./components/header/header";
import { init as formComp} from "./components/form/form";
import { init as footerComp} from "./components/footer/footer";

// function initContainerComp() {
//     class Container extends HTMLElement {
//         constructor() {
//             super();
//             this.render();
//         }
//         render() {
//             let style = document.createElement("style");
//             style.textContent = `
//             .container {
//                 display: flex;
//                 flex-direction: column;
//                 align-items: center;
//             }`;
    
//             let shadow = this.attachShadow({ mode: "open" });
    
//             let container = document.createElement("div");
             
//             container.classList.add("container");
            
//             shadow.appendChild(style);
//             shadow.appendChild(container)
//         }
//     }
//     customElements.define("container-el", Container)
// }

(function main() {
    
    // initContainerComp();
    titleComp();
    subtitleComp();
    mediumTextComp();
    headerComp();
    formComp();
    footerComp();
})()