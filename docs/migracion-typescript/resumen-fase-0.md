# Resumen para estudiar: fase 0

Esta página es lo que hay que recordar. Los pasos de instalación están en las notas 01 a 04. Aquí no se repiten.

La fase 0 está cerrada. `npm run typecheck` termina sin errores. A eso se le llama **en verde**: el comando acaba y no aparece ningún error.

## Dos programas, dos trabajos

En la computadora puede haber dos TypeScript.

- El de toda la máquina lo ves con `tsc --version`. Puede servir para otros proyectos.
- El de esta carpeta lo usa `npm run typecheck`. Es el que lee el `tsconfig.json` de este portafolio.

Si los dos muestran versiones distintas, el que importa aquí es el de la carpeta. El otro da igual para este repo.

También hay dos formas de revisar un cambio, y no se reemplazan:

- `npm run typecheck` mira si los tipos cuadran. No abre la página.
- `npm run dev` abre la página. No mira los tipos.

Si solo abres la página, puedes tener tipos malos y no enterarte. Si solo corres el typecheck, la página igual puede no encontrar un archivo. Al terminar un cambio se corren los dos.

## Cómo se migra un archivo

Se cambia la extensión. Un `.js` de datos pasa a `.ts`. Un componente, más adelante, pasa de `.jsx` a `.tsx`.

No se escribe `// @ts-check` al empezar. Ese comentario es solo una vista previa para un archivo que sigue siendo JavaScript. En esta migración no hace falta.

Casi todos los imports de este proyecto van sin la extensión al final, por ejemplo `../../data/skills`. Renombrar `skills.js` a `skills.ts` no obliga a tocar ese import. Vite encuentra el archivo. La excepción es `src/main.jsx`, que pide `./App.jsx` con extensión. Ese archivo se toca al final, cuando se renombre `App`.

## Lo que el `tsconfig` está haciendo

- `strict` revisa de verdad los archivos `.ts` y `.tsx`. Un dato sin tipo no se cuela como “cualquier cosa”.
- `allowJs` deja que un archivo nuevo importe los `.js` que todavía no migraste.
- `checkJs: false` deja esos `.js` en paz. No se revisan hasta que cambies la extensión.
- `noEmit` hace que TypeScript solo opine. El JavaScript de la página lo sigue escribiendo Vite.
- `module` y `moduleResolution` están en modo bundler, que es como Vite busca los archivos. El modo Node (`nodenext`) no correspondía a esta app.
- `include: ["src"]` limita la revisión a la app. Vite y ESLint siguen con sus propios archivos.

Los comentarios viejos que quedaron en `tsconfig.json` y en `vite.config.js` no cambian nada. Se pueden borrar cuando estorben.

## Qué no hay que memorizar

El número de vulnerabilidades de `npm audit` no es parte de TypeScript. No se usa `npm audit fix --force`. Un arreglo suave, sin `--force`, puede esperar a otro momento para no mezclarlo con los tipos.

Tampoco hace falta recordar `declaration`, `sourceMap` ni los strict extra (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`). Quedaron apagados a propósito.
