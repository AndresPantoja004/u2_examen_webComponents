# `<career-card>` Web Component

El componente `<career-card>` es un Web Component desarrollado con [LitElement](https://lit.dev/) que muestra información detallada sobre una carrera universitaria (nombre, facultad, descripción e imagen). Está diseñado para integrarse con otros componentes, como `<career-selector>`, y actualiza dinámicamente su contenido según la selección del usuario.

---

## 🧩 Funcionalidad

- Muestra una tarjeta con los datos de una carrera.
- Aplica un **tema visual** personalizado según el **último dígito de la cédula** proporcionado.
- Puede integrarse fácilmente con el componente `<career-selector>` que emite el evento `career-selected`.

---

## 📦 Propiedades

| Propiedad               | Tipo    | Descripción                                                                 |
|------------------------|---------|-----------------------------------------------------------------------------|
| `carrera`              | `Object`| Objeto que contiene los datos de la carrera a mostrar.                     |
| `cedula-ultimo-digito` | `Number`| Último dígito de la cédula. Se usa para determinar el tema visual aplicado.|

---

## 🎨 Temas por cédula

El tema de la tarjeta varía automáticamente según el último dígito de cédula:

| Dígito | Tema   | Descripción                      |
|--------|--------|----------------------------------|
| 0–1    | Azul   | Colores institucionales          |
| 2–3    | Verde  | Naturaleza, agronomía            |
| 4–5    | Rojo   | Energía, mecatrónica             |
| 6–7    | Gris   | Tecnología, software             |
| 8–9    | Naranja| Innovación, emprendimiento       |

---

## 🚀 Uso

### 1. Importar el componente

```ts
import './components/career-card.ts';

O en HTML directamente (si usas Vite o Webpack con ES Modules):
```

```html
<script type="module" src="/src/components/career-card.ts"></script>
```

## 2. Incluir en HTML
```html
<career-card cedula-ultimo-digito="3"></career-card>
```

3. Asignar datos a la propiedad carrera
```ts
const card = document.querySelector('career-card');
card.carrera = {
  nombre: 'Ingeniería en Software',
  facultad: 'Facultad de Ingeniería',
  descripcion: 'Formación en desarrollo de software.',
  imagen: 'https://via.placeholder.com/300x150?text=Software',
};
```

## 🔗 Integración con career-selector
El componente <career-card> está diseñado para actualizarse cuando se seleccione una carrera desde <career-selector>.


```html
<career-selector></career-selector>
<career-card id="card" cedula-ultimo-digito="7"></career-card>

<script>
  const card = document.getElementById('card');
  document.addEventListener('career-selected', (e) => {
    card.carrera = e.detail;
  });
</script>
```