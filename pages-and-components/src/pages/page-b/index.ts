export function initPageB(params) {
    const div = document.createElement("div")

    div.innerHTML = `
    <header-el></header-el>
    <div style="display:flex; flex-direction:column; align-items:center">
      <h1 style="
      padding: 30px;
      margin: 0;
      font-family: 'Poppins', sans serif;
      font-size: 52px;
      font-weight: bold;
      text-align: center;">Necesitamos algunos datos mas</h1>
      <formulario-el></formulario-el>
      <footer-el style="width:100%"></footer-el>
    </div>
    `
    
    
    return div;
}