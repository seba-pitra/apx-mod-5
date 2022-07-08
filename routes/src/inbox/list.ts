export function inboxListComp(el) {
    const compEl = document.createElement("div")

    compEl.innerHTML = `<div class="inbox-container">
                <h1 class="inbox-title">Inbox</h1>
                <a href="" class="inbox-email">
                    <button class="inbox-email">Un email</button>
                </a>
                <a href="" class="inbox-email">
                    <button class="inbox-email">Un email</button>
                </a>
            </div>`;
    
    el.appendChild(compEl);
}