## Descripción

Aplicación frontend tipo e‑commerce enfocada en la presentación y navegación de productos. Está pensada como un ejemplo profesional de arquitectura de componentes, gestión de estado con Context API y uso práctico de Tailwind CSS para diseño responsivo.

Demo: https://frontend-challenge-2026.vercel.app/

## Tecnologías

- React 18
- Vite (bundler / dev server)
- Tailwind CSS
- JavaScript (ES2021)

## Características destacadas

- Estructura de componentes reusable y composable.
- Grid responsive para listados de producto.
- Páginas de detalle con imágenes, descripciones y acciones (añadir al carrito).
- Context API para estado global (carrito, catálogo).

## Estructura del repositorio

- `index.html` — Punto de entrada.
- `package.json` — Scripts y dependencias.
- `vite.config.js`, `tailwind.config.js`, `postcss.config.js` — Config de build y estilos.
- `src/`
	- `main.jsx`, `App.jsx` — Inicialización y rutas.
	- `index.css` — Estilos globales (Tailwind + overrides).
	- `assets/` — Imágenes y recursos.
	- `components/` — Componentes reutilizables (Navbar, Footer, Hero, Item, ProductList, ProductDisplay, SingleProduct, etc.).
	- `context/` — Contextos (por ejemplo `ShopContext.jsx`).
	- `Pages/` — Vistas/Routes (Home, Cart, Contact).
	- `Utils/` — Utilidades y datos (por ejemplo `all_product.js`).

## Componentes clave

- `Navbar` / `Footer` — Layout y navegación.
- `ProductList` — Grilla de productos con responsive design.
- `Item` — Card de producto con imagen y estados hover.
- `ProductDisplay` / `SingleProduct` — Detalle del producto.

## Scripts útiles

Instalar dependencias:

```bash
npm install
```

Desarrollo (dev server):

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

## Buenas prácticas aplicadas

- Componentes desacoplados y con responsabilidad única.
- Uso de utilidades de Tailwind para mantener CSS minimal.
- Gestión de estado localizada con Context API para evitar prop-drilling.

---


