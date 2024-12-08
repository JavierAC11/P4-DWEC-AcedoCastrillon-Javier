# **Aplicación de Gestión de Favoritos**
### 1. [Descripción General](#descripción-general)
### 2. [Funcionalidades Clave](#funcionalidades-clave)
### 3. [Cómo Ejecutar la Aplicación](#cómo-ejecutar-la-aplicación)
### 4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
### 5. [Pantallas](#pantallas)
### 6. [Reflexión](#reflexión)
### 7. [Enlace al despliegue](#enlace-al-despliegue)


## **Descripción General**
Esta aplicación permite a los usuarios explorar modelos de coches, filtrarlos por diversas características y agregar sus modelos favoritos a una lista personalizada almacenada en **Cloud Firestore**. Entre las principales funcionalidades destacan:


- **Exploración de modelos:** Los usuarios pueden filtrar modelos por año, número de puertas, tracción y nombre del modelo.
- **Gestión de favoritos:** Los usuarios pueden añadir y eliminar modelos de su lista de favoritos, la cual se sincroniza en tiempo real con Firestore.
- **Paginación dinámica:** Navegación eficiente a través de una lista de modelos utilizando un sistema de paginación.
- **Autenticación:** Los usuarios se autentican utilizando **Firebase Authentication** mediante correo electrónico y contraseña


---


## **Funcionalidades Clave**




- **Añadir a favoritos:** Los usuarios pueden guardar modelos de automóviles en favoritos.
- **Eliminación de favoritos:** Los usuarios pueden eliminar modelos de sus favoritos reflejándose tanto en Firestore como en la interfaz.
- **Filtros dinámicos:** Filtrado eficiente de los modelos de automóviles.


---


## **Cómo Ejecutar la Aplicación**


1. **Clonar el repositorio**:
Una vez ya dentro del repositorio instalamos el proyecto:
  ```bash
  npm install
  ```
2. **Configuración de firebase**
- Crea un proyecto en firebase
- Crea la autentificación y el FireStore
- Una vez creado el fireStore añadimos 2 colecciones una llamada "Usuarios" y otra "Favoritos"
- Crea un archivo .env en la raíz del proyecto y añade las credenciales de Firebase:
```env
REACT_APP_FIREBASE_API_KEY=tu-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=tu-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu-sender-id
REACT_APP_FIREBASE_APP_ID=tu-app-id
```
3. **Iniciar el servidor de desarrollo:**
```bash
npm run dev
```
## **Tecnologías Utilizadas**


### **Frontend**


- **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario interactivas.
- **React Router**: Gestión de rutas para una navegación fluida entre las páginas.
- **CSS**: La aplicación tiene un pequeño css sencillo


### **Backend**


- **Firebase Firestore**: Base de datos en tiempo real para almacenamiento de datos.
- **Firebase Authentication**: Gestión de autenticación de usuarios.


## **Pantallas**


### **Home**


Esta pantalla tiene una lista de las marcas de coche con una paginación, haciendole click a cada una de las marcas te redirige a la página de todos los modelos de esta marca


### **Contact**


Hay un formulario validado para que los usuarios puedan ponerse en contacto con la empresa.


### **Login**


Página para que el usuario con una cuenta creada pueda loguearse en la aplicación, ver su cuenta y añadir modelos a favoritos.


### **Models**


Tiene la vista de todos los modelos de cada marca con las funciones de ver más información de cada modelo, un filtrado de los modelos y añadir a favoritos.


### **NotFound**


Página por si hay un error en la ruta de la aplicación


### **Signup**


Página de registro del usuario que guarda la información en la base de datos y crea el usuario.


### **UserProfile**


Página para mostrar la información de un usuario logueado incluyendo los modelos guardados en favoritos.


## **Reflexión**


Con este proyecto he asentado más los conocimientos de React, también he aprendido el uso de base de datos con Firebase.


Con el uso de la API tuve un problema con el cliente ya que al cargar todos los datos no me cargaba, ese problema lo solucione cargando primero las marcas y una vez cargadas ya meterme los modelos de cada una de ellas.


Personalmente una de las cosas que mejoraría del proyecto es la implementación de Material UI para que se vea de una manera más bonita la aplicación.

## **Enlace al despliegue**

[https://p4-dwec.netlify.app/](https://p4-dwec.netlify.app/)
