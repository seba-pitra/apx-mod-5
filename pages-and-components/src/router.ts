import { initWelcome } from "./pages/welcome"
import { initStep1 } from "./pages/step-1"
import { initThankyou } from "./pages/thankyou"
import { initTextField } from "./components/text-field";
import { initTextFieldB } from "./components/text-field";
import { initTextFieldC } from "./components/text-field";

const routes = [
    {
        path: /\/a/,
        component: initWelcome
    },
    {
        path: /\/b/,
        component: initStep1
    },
    {
        path: /\/c/,
        component: initThankyou
    }
]

export function initRouter(container) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute(route) {    
        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({goTo: goTo});
                if (container.firstChild) {
                    container.firstChild.remove();
                }
                container.appendChild(el)
            }
        }
    }
    if (location.pathname == "/") {
        goTo("/a")
    } else {
        handleRoute(location.pathname);  
    }

    window.onpopstate = function() {
        handleRoute(location.pathname);
    };


    initTextField({goTo: goTo});
    initTextFieldB({goTo: goTo});
    initTextFieldC({goTo: goTo});
}