class Panel extends HTMLElement
{
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML =
            `
<div class="card card-primary card-outline"
        <div class="card-header">
          <h5 class="m-0">Featured</h5>
        </div>
        <div class="card-body">
          <h6 class="card-title">Special title treatment</h6>

          
        </div>
        <div class="card-footer">
          
        </div>
</div>
            `
    }
}

if (!customElements.get('wct-panel')) {
    customElements.define('wct-panel', Panel);
}
