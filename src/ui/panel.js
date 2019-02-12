class Panel extends HTMLElement
{
    constructor() {
        super();

    }
}

if (!customElements.get('wct-panel')) {
    customElements.define('wct-panel', Panel);
}
