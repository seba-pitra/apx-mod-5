export function sentListComp() {
    const compEl = document.createElement("div")

    compEl.innerHTML = `<div class="sent-container">
                <h1 class="sent-title">Sent</h1>
                <a href="/inbox/12" class="link sent-email">Email 1
                </a>
                <a href="/inbox/42" class="link sent-email">Email 2
                </a>
            </div>`;
    
    return compEl;
}