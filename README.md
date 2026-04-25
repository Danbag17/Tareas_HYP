[README.md](https://github.com/user-attachments/files/27081915/README.md)
# Tareas HYP 📋

Colección de proyectos y ejercicios técnicos desarrollados para **Hyperloop UPV**. El repositorio cubre desde fundamentos de maquetación web hasta lógica de negocio con estándares modernos de JavaScript.

---

## 📁 Estructura del repositorio

| Directorio | Descripción |
|---|---|
| `poryecto/` | Gestor de tareas con CRUD completo y filtrado dinámico |
| `tarea4/` | Visualizador interactivo del Romancero Gitano de Lorca |
| `tarea3ES6/` | Programación orientada a objetos con herencia y encapsulamiento |
| `tarea3/` | Ejercicios con métodos funcionales de arrays (map, filter, spread) |
| `provisional/` | Entorno moderno con React 19 + Vite |
| `tarea1/` | Primera práctica de estructura HTML |
| `tarea2/` | Maquetación con HTML y CSS |

---

## 🚀 Proyectos principales

### 1. Gestor de tareas — `poryecto/`

Aplicación web funcional para coordinar responsabilidades dentro del equipo.

**Archivos:** `front.html`, `script.js`, `style.css`

**Funcionalidades:**
- Añadir, editar y eliminar tareas en tiempo real
- Filtrado por departamento (Software, Hardware, Partners, Otros)
- Validación de datos mediante clase `tarea` con campos privados (`#texto`, `#responsable`)
- Edición inline con inputs y selects dinámicos en la tabla

**Uso:**
```
Abrir front.html en el navegador
```

---

### 2. Antología digital — `tarea4/`

Visualizador interactivo del *Romancero Gitano* de Federico García Lorca.

**Archivos:** `d.html`, `poemas.js`, `estilo.css`

**Funcionalidades:**
- 18 poemas cargados dinámicamente desde `poemas.js`
- Selección aleatoria sin repetición consecutiva
- Cálculo automático de versos y estrofas por poema
- Efecto visual especial (clase `.aurora`) para poemas que contienen la palabra *aurora*

**Uso:**
```
Abrir d.html en el navegador
```

---

### 3. Arquitectura de clases ES6 — `tarea3ES6/`

Demostración de herencia, encapsulamiento y métodos estáticos en JavaScript moderno.

**Archivo:** `ES.js`

**Estructura de clases:**

```
Person
└── Member
    └── Engineer
Team  (gestiona colecciones de Member/Engineer)
```

**Características:**
- Propiedades privadas con `#`
- Getters y setters con validación
- Método estático para calcular la letra del DNI
- Clase `Team` con `addMember`, `removeMember`, `listMembers` y `countMembersByDepartment`

**Uso:**
```bash
node tarea3ES6/ES.js
```

---

### 4. Arrays funcionales — `tarea3/`

Ejercicios con métodos funcionales de arrays en ES6.

**Archivo:** `tarea.js`

Cubre: `map`, `filter`, `push`, spread operator (`...`) y encadenamiento de operaciones.

---

### 5. Entorno React + Vite — `provisional/`

Plantilla base con configuración moderna lista para desarrollar.

**Stack:** React 19, Vite 7, ESLint, React Compiler (Babel)

**Comandos:**
```bash
cd provisional
npm install
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Vista previa del build
```

---

### 6. Prácticas HTML/CSS — `tarea1/` y `tarea2/`

Páginas web sobre Hyperloop UPV con contenido progresivamente mejorado.

- **tarea1:** Estructura semántica básica con tabla, formulario y enlaces
- **tarea2:** Añade estilos CSS propios con clases, tabla de miembros y diseño visual mejorado

---

## 🛠️ Tecnologías

- **HTML5 / CSS3** — Maquetación y estilos
- **JavaScript ES6+** — Lógica, clases, métodos funcionales
- **React 19** — Interfaz de usuario reactiva
- **Vite 7** — Bundler y servidor de desarrollo
- **ESLint** — Linting y calidad de código

---

## 📌 Notas

- Los archivos `tarea1/web.html` y `tarea2/web.html` referencian una imagen local (`C:\Users\danie\Downloads\hyperloopimg.jpg`) que no está incluida en el repositorio; sustituirla por una ruta relativa o URL pública si se despliega.
- El directorio `provisional/` está configurado con Node ≥ 20.19 o ≥ 22.12 (requisito de Vite 7).
