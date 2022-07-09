export function inboxEmailComp() {
    const compEl = document.createElement("div")
    const emailId = location.pathname.split("/")[2];

    compEl.innerHTML = `<div class="email-container">
                <h2 class="email-title">Recibido</h2>
                <p class="email-text">Email: ${emailId}</p>
            </div>`;
    
    return compEl
}