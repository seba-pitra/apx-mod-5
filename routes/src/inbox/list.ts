export function inboxListComp() {
    const compEl = document.createElement("div")

    compEl.innerHTML = `<div class="inbox-container">
                <h1 class="inbox-title">Inbox</h1>
                <a href="/inbox/12" class="link inbox-email">Email 1
                </a>
                <a href="/inbox/32" class="link inbox-email">Email 2
                </a>
            </div>`;
    
    return compEl
}