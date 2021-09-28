export function loremComp() {
  class Lorem extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const container = document.createElement("div");
      container.classList.add("container");
      container.innerHTML = `
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          `;

      const styles = document.createElement("style");
      styles.textContent = `
            .container{
                margin: 0 auto;
                width: 100%;
            }

            .description {
                text-align: center;
                margin: 50px;
            }
            
        `;

      shadow.appendChild(styles);
      shadow.appendChild(container);
    }
  }

  customElements.define("lorem-el", Lorem);
}
