import { handleRoute } from "./handle-route";

function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
    findAndProcessLinks();//
}

export function findAndProcessLinks(container:any = document) {
    // esta funcion encuentra las rutas de los links y las manda a la funcion goTo()
    const els = container.querySelectorAll(".link");
    for (const link of els) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const route = (e.target as any).getAttribute("href");
            goTo(route)
        })
    }
}

(function() {
    findAndProcessLinks();

    window.addEventListener("load", () => {
        handleRoute(location.pathname)
    })
})()