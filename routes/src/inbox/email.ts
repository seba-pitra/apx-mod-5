export function inboxEmailComp(el) {
    const compEl = document.createElement("div")

    compEl.innerHTML = `div class="email-container">
                <h2 class="email-title">Recibido</h2>
                <p class="email-text">Lo que esta en la url</p>
            </div>`;
    
    el.appendChild(compEl);
}