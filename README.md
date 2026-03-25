## Nike Flow — Práctica Frontend (marzo 2026)

Este repositorio contiene una práctica de frontend realizada para demostrar habilidades con React, Tailwind CSS y Vite. El objetivo fue implementar cambios visuales y de interacción en la lista y detalle de productos, probar el entorno de desarrollo y dejar instrucciones para reproducir y deshacer los cambios en vivo.

Resumen rápido:
- Proyecto: interfaz tipo e‑commerce (UI de calzado estilo "Nike").
- Objetivo de la práctica: cambiar color de estrellas a amarillo, mostrar productos en 3 columnas, cambiar la forma del cursor personalizado, y añadir efecto hover (zoom + máscara).

Demo: https://frontend-challenge-2026.vercel.app

---

## Qué hice en esta práctica (resumen)

- Corregí una dependencia inexistente en `package.json` y eliminé su referencia en `tailwind.config.js` para que el proyecto instale y arranque correctamente.
- Implementé —temporalmente— cambios visuales para la demo:
	- Estrellas amarillas en la vista de producto (`src/components/ProductDisplay.jsx`).
	- Grid de productos en 3 columnas en pantallas grandes (`src/components/ProductList.jsx`).
	- Cursor personalizado en forma no circular mediante override CSS (`src/index.css`) usando `#mouse-follower`.
	- Hover sobre cards: zoom y máscara gris con animación (`src/components/Item.jsx`).

> Todos los cambios temporales que se usaron para la demo pueden deshacerse con `git restore` (más abajo explico cómo).

---

## Cómo ejecutar el proyecto (rápido)

1. Clona tu fork / repo local si aún no lo tienes:

```bash
git clone https://github.com/D13G0ARJ/frontend-challenge-2026.git
cd frontend-challenge-2026
```

2. Instala dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

3. Abre en el navegador: `http://localhost:5173`

---

## Qué probar (checklist para la demo)

- [ ] Estrellas: en el detalle de producto las estrellas deben verse amarillas.
- [ ] Layout: en la página de productos (`/mens`, `/womens` según datos) la grilla debe mostrar 3 columnas en pantallas grandes.
- [ ] Cursor: el follower del cursor debe verse con esquinas (no perfectamente circular).
- [ ] Hover producto: al pasar el cursor sobre una card debe hacer un zoom suave y aparecer una máscara gris animada.

---

## Cambios manuales (qué editar, paso a paso)

1) Estrellas a amarillo — `src/components/ProductDisplay.jsx`

Reemplaza el bloque de 5 `<Star />` por:

```jsx
<Star className='text-yellow-400' fill='currentColor' />
<Star className='text-yellow-400' fill='currentColor' />
<Star className='text-yellow-400' fill='currentColor' />
<Star className='text-yellow-400' fill='currentColor' />
<Star className='text-yellow-400' fill='none' />
```

2) Grid a 3 columnas — `src/components/ProductList.jsx`

Busca la clase `lg:grid-cols-4` y cambia a `lg:grid-cols-3`.

3) Cursor no circular — `src/index.css`

Al final del archivo añade:

```css
#mouse-follower,
#mouse-follower * {
	border-radius: 2px !important;
}
```

4) Hover con zoom + máscara — `src/components/Item.jsx`

En el contenedor de la imagen usa este patrón mínimo:

```jsx
<div className='relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:h-80 h-96 border'>
	<div className='pointer-events-none absolute inset-0 z-10 bg-gray-300/60 mix-blend-multiply -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out' />
	<img src={product?.image} alt={product?.name} className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110' />
</div>
```

---

## Cómo deshacer los cambios de la práctica (rápido)

Si quieres dejar el repo exactamente como estaba antes de la práctica (solo deshacer los cambios de UI que aplicamos), ejecuta:

```bash
git restore src/components/ProductDisplay.jsx src/components/ProductList.jsx src/components/Item.jsx src/index.css
```

Eso mantendrá los fixes de instalación en `package.json` y `tailwind.config.js` (recomendado). Si por alguna razón necesitas revertir TODO, incluye también esos archivos en el `git restore`.

---

## Archivos modificados durante la práctica

- `package.json` (se eliminó una dependencia inválida)
- `tailwind.config.js` (se quitó la referencia al plugin faltante)
- `src/components/ProductDisplay.jsx` (estrellas)
- `src/components/ProductList.jsx` (grid a 3 cols)
- `src/components/Item.jsx` (hover: máscara + zoom)
- `src/index.css` (override `#mouse-follower`)

---

## Commit y subida

- Commit usado en mi sesión: `chore: fixes for installation and dev run`.
- Subí los cambios a tu repositorio remoto `https://github.com/D13G0ARJ/frontend-challenge-2026.git` en la rama `main`.

---

Si quieres, puedo añadir una sección de evaluación (qué mirar en 60s) o generar un branch separado con solo los cambios de la práctica. ¿Quieres que cree ese branch? 

Gracias — avísame si quieres que adapte el README (más corto o más técnico). 
