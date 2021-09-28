export function titleComp() {
  class Title extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const container = document.createElement("div");
      container.innerHTML = `
        <h1 class="title">Título de esta página</h1>
        <p class="description">Esta página sin dudas es la mejor</p>
      `;

      const styles = document.createElement("style");
      styles.textContent = `
      .title {
        font-size: 52px;
        text-align: left;
        margin: 0;
      }
      
      .description {
        margin: 23px 0 0 0;
      }
      
      `;

      shadow.appendChild(styles);
      shadow.appendChild(container);
    }
  }

  customElements.define("title-el", Title);
}
