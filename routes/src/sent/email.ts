export function sentEmailComp() {
    const compEl = document.createElement("div")
    const emailId = location.pathname.split("/")[2];

    compEl.innerHTML = `<div class="sent-email-container">
                <h2 class="email-title">Enviado</h2>
                <p class="email-text">Email: ${emailId}</p>
            </div>`;
    
    return compEl;
}