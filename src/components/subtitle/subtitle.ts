export function subtitleComp() {
  class Subitle extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const container = document.createElement("div");
      container.innerHTML = `
          <h2 class="title">Subtítulo</h2>
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</p>
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</p>      
        `;

      const styles = document.createElement("style");
      styles.textContent = `
        .title {
          font-size: 38px;
          text-align: left;
          margin: 0;
        }
        
        .description {
          margin: 23px 0 0 0;
        }
        
        `;

      if (this.children[0]) {
        container.appendChild(this.children[0]);
      }

      shadow.appendChild(styles);
      shadow.appendChild(container);
    }
  }

  customElements.define("subtitle-el", Subitle);
}
