import { inboxListComp } from "./inbox/list"
import { inboxEmailComp } from "./inbox/email"
import { sentListComp } from "./sent/list"
import { sentEmailComp } from "./sent/email"
import { findAndProcessLinks } from "./index"

export function handleRoute(route) {
    console.log("le agregaste una ruta a handle route", route);

    const routes = [
        {
            path: /\/inbox/,
            handler: inboxListComp 
        },
        {
            path: /\/inbox\/./,
            handler: inboxEmailComp
        },
        {
            path: /\/sent/,
            handler: sentListComp
        },
        {
            path: /\/sent\/./,
            handler: sentEmailComp
        }
    ]

    /*
    En este for, se testea que sea una RegExp la route.
    Lugeo, elijo el contenedor que tiene el contenido del inbox o del sent y 
    borro lo que tiene. Con eso hecho, le apendeo al container el comp del handler
    */
    for (const r of routes) {
        if (r.path.test(route)) {
            const el = r.handler();
            const contentEl: any = document.querySelector(".content")
            if (contentEl.firstChild) {
                contentEl.firstChild.remove();
            }
            contentEl.appendChild(el)
            findAndProcessLinks(el)
        }
    }
}