import { initPageA } from "./pages/page-a"
import { initPageB } from "./pages/page-b"
import { initPageC } from "./pages/page-c"
import { initHeader } from "./components/header";
import { initFooter } from "./components/footer";
import { initTitle } from "./components/title";
import { initTextField } from "./components/text-field";
import { initTextFieldB } from "./components/text-field";
import { initTextFieldC } from "./components/text-field";

const routes = [
    {
        path: /\/a/,
        component: initPageA
    },
    {
        path: /\/b/,
        component: initPageB
    },
    {
        path: /\/c/,
        component: initPageC
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
    handleRoute(location.pathname);   
    initHeader();
    initFooter();
    initTitle();
    initTextField({goTo: goTo});
    initTextFieldB({goTo: goTo});
    initTextFieldC({goTo: goTo});
}