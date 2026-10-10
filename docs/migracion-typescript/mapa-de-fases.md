# Qué estudiar en cada fase

Lee esta página para saber en qué fase estás. El detalle de “por qué” está en las notas. Lo que se repasa antes de seguir está en el resumen de esa fase.

## Fase 0 — preparación

Cerrada. Se estudia: [resumen-fase-0.md](resumen-fase-0.md).

El TypeScript de esta carpeta es el que vale, el typecheck y la página son dos revisiones distintas, y un archivo se migra cambiando la extensión.

## Fase 1 — los datos

Cerrada. Se estudia: [resumen-fase-1.md](resumen-fase-1.md).

`labLinks.ts`, `skills.ts` y `socialLinks.ts` tienen una forma con nombre y una lista que no se reordena. `"stroke"` o `"fill"` es un valor que solo puede ser una de dos palabras.

## Fase 2 — el reloj de los iconos

Es la fase actual. Antes de tocar código, lee [07-useAnimatedIcons.md](07-useAnimatedIcons.md). Al terminar, estudia [resumen-fase-2.md](resumen-fase-2.md).

El hook recibe la lista de skills y cada cierto tiempo enciende el icono siguiente. Vas a decirle que esa lista es `readonly Skill[]` y que el número que guarda es un `number`. También vas a ver por qué el reloj se apaga cuando la sección deja de mostrarse.

`useRef` y los clics no están en este archivo. No se estudian aquí.

## Más adelante

Estas fases todavía no se estudian. Cada una tendrá su nota y su resumen cuando llegue.

- Fase 3: el botón de tema claro u oscuro. Ahí el estado solo puede ser `"light"` o `"dark"`, y hay un clic.
- Fase 4: el idioma del portafolio, `"es"` o `"en"`.
- Fase 5: los componentes que dibujan estos datos (`LabLink`, `SocialMedia`, `SkillsPage`).
- Fase 6: las páginas y, al final, `src/main.jsx`, el único import que escribe `.jsx`.
