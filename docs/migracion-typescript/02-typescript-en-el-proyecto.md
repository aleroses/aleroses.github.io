# 02. TypeScript en el proyecto, no en la máquina

## El error

`npm install -g typescript` y `tsc --version` (7.0.2) demuestran que el compilador está instalado en tu usuario. En `package.json` no hay `typescript`.

Un binario global no viaja con el repo. Otro clone, otra computadora o un `npx tsc` no tienen por qué usar esa 7.0.2. El `tsconfig.json` que generó `tsc --init` sí quedó en el proyecto, atado a los defaults de esa versión global. El compilador que debería leerlo, no.

## Por qué la app sigue igual

Vite no compila esta app con `tsc`. El plugin es `@vitejs/plugin-react-swc`: SWC transpila JSX y el bundle lo arma Vite. `npm run dev` y `npm run build` no abren `tsconfig.json`.

Por eso la fase 0 puede “funcionar” con un `tsconfig` incorrecto. Nadie lo está aplicando. El día que renombres un archivo, Vite va a transpilarlo igual. Los errores de tipos solo aparecen si tú corres el compilador de TypeScript.

Eso es lo que quieres: Vite genera el JavaScript, `tsc` solo opina de tipos. Si dejas que `tsc` también emita archivos, vas a tener dos compiladores escribiendo JS y se van a pisar.

## La decisión

Instala TypeScript como dependencia de desarrollo del repo:

```bash
npm install -D typescript
```

Sin `-g`. npm lo anota en `devDependencies` y guarda la versión en el lockfile. Esa es la versión del proyecto. La global puede seguir instalada; los scripts de npm no la usan.

npm, al correr un script, pone `node_modules/.bin` delante en el `PATH`. Un script que llama a `tsc` usa el compilador local aunque tengas otro `tsc` global.

Agrega un script aparte en `package.json`:

```json
"typecheck": "tsc --noEmit"
```

`--noEmit` es la red de seguridad: aunque el `tsconfig` todavía pida archivos de salida, este comando no los escribe. La nota 03 mueve esa decisión al propio `tsconfig` (`"noEmit": true`). Las dos capas hacen falta. El flag del script protege el día que alguien cambie el `tsconfig`. La opción del `tsconfig` protege el día que alguien corra `tsc` sin el script.

No metas `tsc` dentro de `"build"` todavía.

`"build": "vite build"` tiene que seguir siendo el build que publica. Enganchar el typecheck ahí ahora mezcla “¿compila el sitio?” con “¿ya tipamos todo?”. Durante la migración vas a tener archivos `.tsx` a medias. Quieres poder publicar, y quieres un comando separado que falle cuando los tipos estén mal. Más adelante, cuando el typecheck lleve un tiempo en verde, se puede añadir al build o a CI. Hoy sería un freno prestado.

## Qué no hacer

No reinstales el global para “alinear versiones”. No borres `tsconfig.json` para volver a correr `tsc --init`: el init de TypeScript 7 asume un paquete de Node, y este repo es una SPA de Vite. La nota 03 parte del archivo que ya tienes y lo corrige.

Tampoco corras `npm run typecheck` en cuanto instales el paquete. Con el `tsconfig` actual (`declaration`, `sourceMap`, sin `allowJs`, `module` en `nodenext`) el resultado no te enseña nada útil sobre la app. Primero las notas 03 y 04.

## Cómo comprobarlo

Después de instalar:

```bash
npm ls typescript
```

Tiene que aparecer como dependencia del proyecto, no solo como instalación global.

Cuando el `tsconfig` de la nota 04 esté aplicado:

```bash
npm run typecheck
```

En ese momento casi no hay archivos `.ts`. El éxito de la fase 0 es que ese comando termine sin errores. Si emite `.d.ts` o `.js` dentro de `src`, `noEmit` no quedó bien puesto.

Para ver qué binario usa el script:

```bash
npm exec which tsc
```

La ruta tiene que estar en `node_modules` de este repo.

## En simple

Puede haber dos TypeScript instalados. `tsc --version` es el de toda la computadora. `npm run typecheck` usa el de esta carpeta, y ese es el que lee el `tsconfig` del portafolio. Si el de la computadora muestra otra versión, da igual: este proyecto no lo usa.
