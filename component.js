class LineToLeft extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.color = "#fdf2e9";
    this.shadowRoot.innerHTML = `
    <style>
    .line {
      width: 0;
      height: 0;
      border-right: 0rem solid transparent;
      border-left: 100vw solid ${this.color};
      border-bottom: 6.4rem solid transparent;
      margin: 0 auto;
    }
    </style>

    <div class="line"></div>
    `;
  }
  connectedCallback() {
    const attributeColor = this.getAttribute("color");
    if (attributeColor) {
      this.color = attributeColor;
      this.shadowRoot.querySelector(".line").style.bordeLeftColor = this.color;
    }
  }
}

customElements.define("line-to-left", LineToLeft);

class LineToRight extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.color = "#fdf2e9";
    this.shadowRoot.innerHTML = `
    <style>
    .line {
      width: 0;
      height: 0;
      border-left: 0rem solid transparent;
      border-right: 100vw solid ${this.color};
      border-bottom: 6.4rem solid transparent;
      margin: 0 auto;
    }
    </style>

    <div class="line"></div>
    `;
  }
  connectedCallback() {
    const attributeColor = this.getAttribute("color");
    if (attributeColor) {
      this.color = attributeColor;
      this.shadowRoot.querySelector(".line").style.borderRightColor =
        this.color;
    }
  }
}

customElements.define("line-to-right", LineToRight);

class VShapeDown extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.color = "#fdf2e9";
    this.shadowRoot.innerHTML = `
    <style>
    .line {
      width: 0;
      height: 0;
      border-right: 50vw solid transparent;
      border-left: 50vw solid transparent;
      border-top: 8rem solid ${this.color};
      margin: 0rem auto;
    }
    </style>

    <div class="line"></div>
    `;
  }
  connectedCallback() {
    const attributeColor = this.getAttribute("color");
    if (attributeColor) {
      this.color = attributeColor;
      this.shadowRoot.querySelector(".line").style.borderTopColor = this.color;
    }
  }
}

customElements.define("v-down-shape", VShapeDown);

class VShape extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.color = "#fdf2e9";
    // this.color;
    this.shadowRoot.innerHTML = `
    <style>
    .line {
      width: 0;
      height: 0;
      border-right: 50vw solid transparent;
      border-left: 50vw solid transparent;
      border-bottom: 8rem solid ${this.color};
      margin: 0rem auto;
    }
    </style>

    <div class="line"></div>
    `;
  }
  connectedCallback() {
    const attributeColor = this.getAttribute("color");
    if (attributeColor) {
      this.color = attributeColor;
      this.shadowRoot.querySelector(".line").style.borderBottomColor =
        this.color;
    }
  }
}

customElements.define("v-shape", VShape);
