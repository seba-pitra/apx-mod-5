export function initPageA(params) {
    const div = document.createElement("div")

    div.innerHTML = `
    <header-el></header-el>
    <div style="display:flex; flex-direction:column; align-items:center">
      <title-el></title-el>
      <form-el></form-el>
      <footer-el style="width:100%"></footer-el>
    </div>
    `
    
    
    return div;
}