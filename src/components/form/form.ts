// 06:30 - Final

export function formComp() {
  class Form extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("label");

      const formEl = document.createElement("form"); // Contenedor de todos los els (label - input - button - volver)
      formEl.classList.add("form");
      formEl.innerHTML = `
        <div class="root">
            <label for="name" class="label">${label}</label>
            <input id="name" class="input" type="text" placeholder="Ingrese su ${label}">
        </div>

        <button class="button">Button</button>

        <button class="volver">Volver</button>

      `;

      // (15:00) Limite de que estilos darle al componente y que estilos son de la página: (15:00) NO agregar márgenes al componente, eso es responsabilidad de la página. Al componente darle estilos de lo que es el componente hacia adentro, NUNCA hacia afuera, NUNCA con respecto a otros componentes o tags/elementos.
      const styles = document.createElement("style");
      styles.textContent = `
        .form {
          max-width: 353px;
        }
        
        .root {
          display: flex;
          flex-direction: column;
        }
        
        .label {
          font-size: 18px;
        }
        
        .input {
          font-size: 18px;
          padding: 17px 13px;
          margin-top: 3px;
          border: solid 2px black;
          border-radius: 4px;          
        }
        
        .button {
          width: 353px;
          border-style: none;
          height: 55px;
          font-size: 22px;
          display: block;
          background-color: hsla(216, 63%, 76%, 1);
          margin: 15px 0 70px 0;
        }
        
        .volver {
          font-size: 22px;
          border: solid 2px black;
          width: 353px;
        }
      `;

      shadow.appendChild(styles);
      shadow.appendChild(formEl);
    }
  }

  customElements.define("form-el", Form);
}
