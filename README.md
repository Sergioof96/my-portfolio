# Portfolio personal

Web personal de una sola página para presentarme, mostrar los lenguajes que domino y enseñar mis proyectos.
Está hecha con **HTML, CSS y JavaScript puro**: sin frameworks, sin dependencias que instalar y sin paso de compilación.

## Características

- **Portada** a pantalla completa: fotos que se desplazan hacia la derecha y texto que entra desde el centro.
- **Efecto de 0 y 1** que aparece al mover el cursor por la portada (sin invadir el botón).
- **Polvo flotante** de fondo en toda la página.
- **Menú superior** que aparece al salir de la portada y marca la sección activa.
- **Sobre mí** en dos partes: foto con descripción y cuadrícula de iconos de lenguajes.
- **Proyectos** en filas alternadas; los repositorios se cargan solos desde GitHub.
- **Pie de página** con logos interactivos de GitHub y LinkedIn.
- Modo claro y oscuro automático, diseño adaptado a móvil y respeto a la preferencia de «reducir movimiento».

## Estructura

```
portfolio/            
├── index.html        
├── css/styles.css    
├── js/script.js      
├── img/              
└── README.md         
```

## Personalización

Todo el contenido se edita en el bloque `CONFIG` al principio del script de `index.html`. No hace falta tocar nada más.

| Campo | Qué es |
| --- | --- |
| `name` | Título grande de la portada. |
| `shortName` | Nombre corto: se usa en el título de la pestaña y en el copyright del pie. |
| `role` | Frase que aparece bajo el título en la portada. |
| `coverPhotos` | Lista de rutas a las fotos de la portada, por ejemplo `["img/foto1.jpg"]`. Vacío = fondos de color de ejemplo. |
| `githubUser` | Tu **usuario** de GitHub (por ejemplo `miusuario`, no la URL completa). Sirve para el logo del pie y para cargar tus repositorios. |
| `email` | Correo que se muestra en la sección Contacto. |
| `linkedin` | URL completa de tu perfil de LinkedIn. |
| `about` | Lista de párrafos de «Sobre mí». |
| `photo` | Ruta a tu foto de «Sobre mí». Vacío = silueta. |
| `languages` | Lenguajes y herramientas: `{ name: "PHP", icon: "php" }`. El `icon` es el nombre del icono en [devicon.dev](https://devicon.dev) o una ruta a una imagen propia. Los huecos libres se muestran como casillas vacías. |
| `projects` | Proyectos manuales: `{ title, text, url, tag, image }`. `image` es opcional. |

**Título de la pestaña:** al cargar, el script lo fija como `shortName + " · Portfolio"`, y sustituye a la etiqueta `<title>` del `<head>`. Para cambiarlo, edita la línea `document.title = ...`.

