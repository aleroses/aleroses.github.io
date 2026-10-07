# Qué estudiar en cada fase

Lee esta página para saber en qué fase estás. El detalle de “por qué” está en las notas. Lo que se repasa antes de seguir está en el resumen de esa fase.

## Fase 0 — preparación

Cerrada. `npm run typecheck` está en verde.

Se estudia: [resumen-fase-0.md](resumen-fase-0.md).

Ahí está la idea entera: el TypeScript de esta carpeta es el que vale, el typecheck y la página son dos revisiones distintas, y un archivo se migra cambiando la extensión.

## Fase 1 — los datos

Es la fase actual. Se estudia cuando termines los archivos, en [resumen-fase-1.md](resumen-fase-1.md).

Antes de tocar código, lee en este orden:

1. [05-labLinks.md](05-labLinks.md)
2. [06-skills.md](06-skills.md)

Vas a ponerle forma a una lista de enlaces y a una lista de habilidades: un objeto con nombre, una lista que no se reordena, un valor que solo puede ser una de dos palabras (`"stroke"` o `"fill"`), y cómo pedir el tipo a partir del dato.

`socialLinks.js` se queda en JavaScript. Cuando `skills` se entienda, es el mismo ejercicio, no un tema nuevo.

## Más adelante

Estas fases todavía no se estudian. Cada una tendrá su nota y su resumen cuando llegue.

- Componentes que muestran estos datos (`SkillsPage`, iconos, tarjetas). Ahí el tipo sale del archivo de datos y entra a la pantalla.
- El idioma del portafolio. `"es"` y `"en"` son la misma idea que `"stroke"` y `"fill"`: solo dos valores permitidos.
- Las páginas y, al final, `src/main.jsx`, porque es el único archivo que escribe la extensión en el import (`./App.jsx`).
