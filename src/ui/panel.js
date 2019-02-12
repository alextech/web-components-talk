import {style} from "./panel.css.js";

const panelTpl = document.createElement('template');
panelTpl.innerHTML = `
<style>
${style}
</style>
<div class="card card-primary card-outline">
        <div class="card-header">
          <h5 class="m-0"></h5>
        </div>
        <div class="card-body">
          
        </div>
        <div class="card-footer">
          
        </div>
</div>
`;

class Panel extends HTMLElement
{
    static get observedAttributes() {
        return ['header'];
    }

    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(panelTpl.content.cloneNode(true));

        this.headerNode = this.shadowRoot.querySelector(".card .card-header h5");
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (oldVal === newVal) {
            return;
        }

        switch (attrName) {
            case 'header':
                this.headerNode.innerText = newVal;

                break;
        }
    }
}

if (!customElements.get('wct-panel')) {
    customElements.define('wct-panel', Panel);
}
