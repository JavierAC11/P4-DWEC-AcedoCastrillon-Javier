## Segunda entrega
### Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `src/`
    - `components/`: Contiene los componentes reutilizables de la aplicación.
    - `layouts/`: Incluye los diseños y estructuras de página, que contendrá una para cuando esté iniciada la sesión del ususario y otra para cuando no.
    - `pages/`: Contiene las diferentes páginas de la aplicación.
    - `router/`: Maneja las rutas de la aplicación.
    - `index.css`: Archivo de estilos globales.
    - `main.jsx`: Punto de entrada principal de la aplicación.

### Components

Se han creado 2 componentes reutilizables:
- `MensajeError`: este se usará cuando se validen los formularios y no sea correcto lo introducido en el saldrá debajo este mensaje.
- `Navbar`: es una barra de navegación que se usara en todas las páginas

### Layouts

Se ha creado el layout público para cuando no se ha iniciado sesión, más para adelante se creará el privado.

### Pages

Se han creado todas las páginas pero esta entrega está centrada en la de `Contact` con la validación del formulario.

### Router

Se han enrutado todas las páginas de proyecto con React Router, en caso de error te saltará una página con un enlace para ir al inicio. Por ahora no están las rutas protegidas, se implementará próximamente.
