import {style} from "./panel.css.js";

const panelTpl = document.createElement('template');
panelTpl.innerHTML = `
<style>
${style}
</style>
<div class="card card-primary card-outline">
        <div class="card-header">
          <h5 class="m-0">Featured</h5>
        </div>
        <div class="card-body">
          
        </div>
        <div class="card-footer">
          
        </div>
</div>
`;

class Panel extends HTMLElement
{
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(panelTpl.content.cloneNode(true));
    }
}

if (!customElements.get('wct-panel')) {
    customElements.define('wct-panel', Panel);
}
