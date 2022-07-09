import { inboxListComp } from "./inbox/list"
import { inboxEmailComp } from "./inbox/email"
import { sentListComp } from "./sent/list"
import { sentEmailComp } from "./sent/email"
import { findAndProcessLinks } from "./index"

export function handleRoute(route) {
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