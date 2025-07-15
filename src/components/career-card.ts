import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getThemeByCedulaLastDigit } from '../styles/themes';

@customElement('career-card')
export class CareerCard extends LitElement {
  @property({ type: Object }) carrera: any = null;
  @property({ type: Number }) cedulaUltimoDigito = 0;

  static styles = css`
    .card {
      border-radius: 10px;
      padding: 16px;
      max-width: 400px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .header {
      padding: 8px;
      border-bottom: 2px solid;
      font-weight: bold;
      font-size: 1.2em;
    }
    img {
      width: 100%;
      border-radius: 6px;
      margin-top: 10px;
    }
    .description {
      margin-top: 10px;
      font-size: 0.95em;
    }
    .Message-error{
      background: red;
      padding:7px;
      color: white;
      border-radius:17px;
    }
  `;

  render() {
    if (!this.carrera) return html`<p class="Message-error">Seleccione una carrera</p>`;

    const theme = getThemeByCedulaLastDigit(this.cedulaUltimoDigito);

    return html`
      <div class="card" style="border: 2px solid ${theme.border}; background-color: ${theme.background}">
        <div class="header" style="background-color: ${theme.header}; color: white;">
          ${this.carrera.nombre} - ${this.carrera.facultad}
        </div>
        <img src=${this.carrera.imagen} alt="Imagen de ${this.carrera.nombre}" />
        <div class="description">
          ${this.carrera.descripcion}
        </div>
      </div>
    `;
  }
}
