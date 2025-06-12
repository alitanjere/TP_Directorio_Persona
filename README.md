# Directorio de Personas - React Router App

Esta aplicación es un directorio de personas construida con React y React Router DOM. Permite navegar entre distintas páginas para ver una lista de personas, detalles individuales, estadísticas y un formulario de contacto.

## Funcionalidades Principales

*   **Inicio (`/`)**: Muestra una lista de personas con su nombre, edad y un botón "Ver más" para acceder a los detalles.
*   **Detalle de Persona (`/persona/:id`)**: Muestra el nombre completo, edad, email de una persona específica y un mensaje personalizado según si es mayor o menor de edad.
*   **Estadísticas (`/estadisticas`)**: Calcula y muestra:
    *   Total de personas.
    *   Cantidad de personas mayores de 35 años.
    *   La(s) persona(s) de mayor edad.
    *   La(s) persona(s) de menor edad.
    *   Promedio de edad general.
*   **Contacto (`/contacto`)**: Presenta un formulario controlado para ingresar nombre, apellido, email y edad, con validaciones para todos los campos.
*   **Página 404**: Una página amigable para rutas no encontradas.

## Requisitos Técnicos Implementados

*   React functional components y hooks (`useState`, `useEffect`, `useParams`).
*   `react-router-dom` para la navegación y rutas dinámicas.
*   Componentes modularizados y reutilizables.
*   Formulario controlado con validaciones (campos obligatorios, formato de email, edad positiva).
*   Diseño visual básico con CSS, incluyendo algunos aspectos responsivos.

## Estructura del Proyecto

El proyecto sigue la estructura estándar de Create React App:

*   `public/`: Contiene el `index.html` base y otros assets públicos.
*   `src/`: Contiene el código fuente de la aplicación.
    *   `components/`: Componentes reutilizables (Layout, Navbar, PersonaCard, FormularioContacto).
    *   `data/`: Contiene el archivo `Personas.json` con los datos de las personas.
    *   `pages/`: Componentes que representan las diferentes páginas de la aplicación (HomePage, PersonaDetailPage, EstadisticasPage, ContactoPage, NotFoundPage).
    *   `App.js`: Configuración principal de las rutas.
    *   `index.js`: Punto de entrada de la aplicación React.
    *   Archivos CSS para estilos globales y específicos de componentes/páginas.

## Cómo Ejecutar el Proyecto

1.  **Clonar el repositorio (si aplica).**
2.  **Navegar a la carpeta del proyecto:**
    ```bash
    cd nombre-del-directorio-del-proyecto
    ```
3.  **Instalar dependencias:**
    Asegúrate de tener Node.js y npm instalados.
    ```bash
    npm install
    ```
4.  **Iniciar la aplicación en modo de desarrollo:**
    ```bash
    npm start
    ```
    Esto abrirá la aplicación en tu navegador, usualmente en `http://localhost:3000`.

5.  **Para generar una build de producción (opcional):**
    ```bash
    npm run build
    ```
    Los archivos optimizados para producción se encontrarán en la carpeta `build/`.

## Consideraciones

*   Los datos de las personas se cargan desde un archivo JSON local (`src/data/Personas.json`).
*   El formulario de contacto actualmente muestra los datos en la consola al enviar y luego resetea el formulario. No realiza un envío real a un backend.
