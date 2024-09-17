# 🏢 HR Management

¡Bienvenido a **HR Management**! Esta es una aplicación web desarrollada en React JS para gestionar empleados, con funcionalidades de autenticación, manejo de rutas, y formularios con validación.

## ℹ️ Consideraciones
- En la raíz del proyecto, se encuentra un archivo **db.json**, para utilizarlo con **json-server**
- También encontrarán en la raíz del proyecto un archivo llamado **thunder-collection_hr-managment-api.json**, es un export de la extensión **Thunder Client** de **VS Code**, para probar las diferentes Resquests del **API HR Managment**
- Por otro lado no excluí con .gitignore los archivos **.env** y **.env-development**, para que puedan acceder a la URL y Endpoints del API **HR Management** 

## 🚀 Características

- **Autenticación de Usuarios**: Sistema de login para acceder a las funcionalidades de la aplicación.
- **Gestión de Empleados**: Alta, Baja y Modificación de empleados.
- **Listado de Empleados**: Visualización de empleados obtenidos de un mock de API.
- **Rutas Protegidas**: Acceso restringido a ciertas páginas solo para usuarios autenticados.
- **Formularios con Validación**: Uso de un hook personalizado para manejar formularios y validaciones.
- **Layouts Públicos y Privados**: Diferenciación entre páginas accesibles sin login y páginas que requieren autenticación.
- **Patrón Container**: Implementación del patrón Container para separar la lógica de negocio de la presentación.
- **Variables de Entorno**: Uso de variables de entorno en Vite para configurar la URL de la API y los endpoints.
- **Hook para Formularios**: Se utilizó un hook para manejar las funcionalidades comunes de los formularios, como:
  - **Maneja el submit del formulario**: Centraliza la lógica de envío de datos.
  - **Maneja el cambio de los inputs**: Facilita la actualización del estado de los inputs.
  - **Esquema de validaciones**: El hook recibe el esquema de validaciones, pero la implementación específica de la validación se realiza en cada container.

## 📋 Requisitos

1. **Router**
   - Implementación de React Router para la navegación.
   - Rutas protegidas para usuarios autenticados.

2. **Layouts Públicos y Privados**
   - **Layout Público**: Usado en la página de Login.
   - **Layout Privado**: Usado en las páginas accesibles tras iniciar sesión (Home y Empleados).

3. **Páginas**
   - **Login**: Formulario para autenticarse.
   - **Home**: Página principal con contenido libre.
   - **Empleados**:
     - Listado de empleados.
     - **Ver Empleado**: Detalles de un empleado.
     - **Nuevo Empleado**: Formulario para agregar un nuevo empleado.

4. **Custom Hooks**
   - `useForm`: Hook personalizado para manejar formularios y validaciones.

5. **Contexto (Context API)**
   - Manejo del estado global del login del usuario.

## 📦 Instalación y Configuración App React

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/danicode/hr-management.git
    cd hr-management
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia el proyecto:
    ```bash
    npm run dev
    ```

4. Abre el navegador en `http://localhost:5173` para ver la aplicación en acción.

## 📦 Instalación y Configuración Json-Server

1. Instala json-server:
    ```bash
    npm install json-server
    ```

2. Añade configuración para ejecución:
    - Abre archivo **package.json** y agrega lo siguiente debajo de **dependecies**
    ```js
    "scripts": {
        "start": "json-server --watch db.json --port 3000"
    }
    ```

3. Inicia el proyecto:
    ```bash
    npm start
    ```

## 🛠️ Tecnologías Utilizadas

- **React**: Librería de JavaScript para la construcción de interfaces de usuario.
- **React Router**: Para la gestión de rutas en la aplicación.
- **Vite**: Herramienta de desarrollo rápido que permite una configuración mínima para proyectos React.
- **CSS Modular**: Para los estilos de la aplicación.
- **json-server**: Para simular el backend y gestionar empleados.
- **Context API**: Para el manejo del estado global de la aplicación.

¡Disfruta gestionando empleados con **HR Management**! 😄
