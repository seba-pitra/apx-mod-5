export function sentListComp(el) {
    const compEl = document.createElement("div")

    compEl.innerHTML = `<div class="sent-container">
                <h1 class="sent-title">Sent</h1>
                <a href="" class="sent-email">
                    <button class="sent-email">Un email</button>
                </a>
                <a href="" class="sent-email">
                    <button class="sent-email">Un email</button>
                </a>
            </div>`;
    
    el.appendChild(compEl);
}