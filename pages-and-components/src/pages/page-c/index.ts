export function initPageC(params) {
    const div = document.createElement("div")

    div.innerHTML = `
    <header-el></header-el>
    <div style="display:flex; flex-direction:column; align-items:center">
    <agradecimiento-el></agradecimiento-el>  
    <footer-el style="width:100%"></footer-el>
    </div>
    `
    
    return div;
}