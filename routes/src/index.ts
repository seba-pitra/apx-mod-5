import { handleRoute } from "./handle-route";

function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
}

export function findAndProcessLinks(container:any = document) {
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