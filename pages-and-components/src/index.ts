import { initRouter } from "./router"
import { initHeader } from "./components/header";
import { initFooter } from "./components/footer";
import { initTextComp } from "./components/text";

(function() {
    initHeader();
    initFooter();
    initTextComp();

    const root = document.querySelector(".root")
    initRouter(root);
})()