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

## Tercera entrega


### Navbar


En el navbar se ha incluido que depende del contexto (lo explicaré más para adelante) te aparecen unos botones u otros.


### config/firebase


Es la configuración de la autentificación de usuarios de la aplicación


### context/UserContext


Controla si en la aplicación hay un usuario logueado y ayuda cuando se hace el login, un registro o un logOut


### LayoutPrivate


Se ha añadido un Layout para cuando se esta la sesion iniciada y si no tienes sesion iniciada e intentas entrar se volverá automáticamente a la página de inicio


### Models


Esta pagina simplemente se añadido al proyecto pero todavía hay que implementarla junto a todas sus funcionalidades


### Home


En esta pagina que seria la pagina principal de la aplicación ya aparecen un listado paginado de las marcas que nos devuelve la API


### Login y SignUp


Ya implementan el contexto y realizan el login y el registro de usuarios


### router/index


Se ha implementado el lazy load en las paginas las cuales no tienen porque cargar cuando se inicia la aplicación o que no son tan relevantes y se ha implementado el layoutPrivate junto al UserProfile
