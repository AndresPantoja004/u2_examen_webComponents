import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('career-selector')
export class CareerSelector extends LitElement {
  static styles = css`
    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin: 6px 0;
      padding: 8px;
      background: #e5e5e5;
      border-radius: 6px;
      cursor: pointer;
    }

    li:hover {
      background: #939191;
    }
  `;

  @state()
  private carreras: any[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.loadCarreras();
  }

  async loadCarreras() {
    try {
      const res = await fetch('/src/data/carreras.json');
      if (!res.ok) throw new Error('No se pudo cargar el archivo JSON');
      const data = await res.json();
      this.carreras = data;
    } catch (error) {
      console.error('Error al cargar carreras:', error);
    }
  }

  private seleccionarCarrera(carrera: any) {
    this.dispatchEvent(new CustomEvent('career-selected', {
      detail: carrera,
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <ul>
        ${this.carreras.map(c => html`
          <li @click=${() => this.seleccionarCarrera(c)}>
            ${c.nombre}
          </li>
        `)}
      </ul>
    `;
  }
}
