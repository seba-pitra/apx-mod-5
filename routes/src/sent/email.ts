export function inboxEmailComp(el) {
    const compEl = document.createElement("div")

    compEl.innerHTML = `<div class="sent-email-container">
                <h2 class="email-title">Enviado</h2>
                <p class="email-text">Lo que esta en la url</p>
            </div>`;
    
    el.appendChild(compEl);
}