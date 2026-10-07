# 03. El `tsconfig` de `tsc --init` no es el de esta app

`tsc --init` escribió un punto de partida genérico de TypeScript 7. Varias opciones ya sirven. Otras describen una librería de Node que emite `.d.ts`, y este repo no es eso.

Archivo: `tsconfig.json`. Vite lee otro archivo, `vite.config.js`. Los dos tienen que contar la misma historia: hay un bundler, el JS lo emite Vite, y `tsc` solo chequea.

## Lo que ya está bien

Déjalas. Cada una está ahí por una razón concreta.

`"strict": true`  
Activa el paquete de chequeos que importa (null, `any` implícito, `this`, y el resto). La nota 04 explica a qué archivos se aplica. No lo apagues para “ir pasando”.

`"jsx": "react-jsx"`  
React 19 usa el runtime automático. El JSX se compila a `jsx` / `jsxs` importados de `react/jsx-runtime`. No hace falta `import React from "react"` en cada archivo. `"react"` (el valor viejo) inyectaba `React.createElement` y te obligaba a tener React en scope. `"preserve"` dejaría el JSX intacto para otro compilador; aquí el que transpila es SWC, pero el que chequea tipos necesita saber que el JSX es el runtime nuevo, si no los tipos de `@types/react` no coinciden con el código.

`"isolatedModules": true`  
SWC transpila archivo por archivo. No ve el proyecto entero. TypeScript, con esta opción, rechaza sintaxis que solo tendría sentido si el compilador mirara todos los archivos a la vez (por ejemplo, re-exportar un tipo con `export { Tipo }` sin `export type`). Si está en false, `tsc` puede aceptar un archivo que SWC no puede transpilar solo.

`"verbatimModuleSyntax": true`  
Un tipo y un valor se importan distinto: `import type { Algo }` frente a `import { algo }`. El bundler borra los `import type`. Si importas un tipo como si fuera un valor, el bundle puede quedar con un import que en runtime no existe. Duele al principio porque el compilador te obliga a separar los dos. Es el hábito que quieres el día del primer componente, no un strict extra que se enciende al final.

`"moduleDetection": "force"`  
Todo archivo es un módulo, aunque no tenga `import` ni `export`. Si no, un archivo suelto se trata como script y sus variables caen al scope global. En Vite cada archivo es un módulo.

`"skipLibCheck": true`  
No typechequea los `.d.ts` de `node_modules`. Esos errores son de las dependencias, no tuyos, y a veces son contradicciones entre paquetes que no puedes corregir. El chequeo de tu código sigue igual.

`"noUncheckedSideEffectImports": true`  
Un import de efecto (`import "./styles/index.css"`) tiene que resolver a un archivo real. TypeScript 7 lo comprueba. Hace falta el tipo de Vite para que un `.css` cuente como módulo válido. Eso está más abajo, en `src/vite-env.d.ts`.

## Lo que hay que cambiar

### Módulos: de Node a bundler

Hoy:

```json
"module": "nodenext"
```

`nodenext` resuelve como Node. Exige extensiones en los imports relativos y trata los `.js` del import como el archivo emitido de un `.ts`. Tiene sentido en una librería que se publica a npm y se ejecuta en Node.

Esta app la resuelve Vite. En el código ya hay dos estilos a la vez:

- `src/main.jsx` importa `./App.jsx` y `./portfolio/context/LanguageProvider.jsx` con extensión.
- `src/App.jsx` importa `./portfolio/components/Header` sin extensión.

Con `nodenext`, esa mezcla es un error de resolución. Con el bundler, las dos formas son válidas, porque Vite es quien encuentra el archivo.

La pareja que corresponde:

```json
"module": "ESNext",
"moduleResolution": "bundler"
```

`ESNext` describe el formato de módulo (import/export nativos), que es el `"type": "module"` del `package.json` y lo que Vite empaqueta. `bundler` es la regla de resolución: puede omitir la extensión, puede usar `.jsx`, y no exige el algoritmo de Node.

Junto con eso, cuando `noEmit` esté en true:

```json
"allowImportingTsExtensions": true
```

Permite escribir `import { Header } from "./Header.tsx"` el día que el archivo se llame así. TypeScript, por defecto, prohíbe importar un `.ts` porque en Node ese archivo no existe en runtime. Vite sí lo resuelve. La opción solo es legal si el compilador no emite JS (`noEmit`). No te obliga a poner la extensión. Los imports sin extensión que ya tienes siguen siendo válidos.

`src/main.jsx` seguirá diciendo `./App.jsx` hasta que renombres ese archivo. Cuando lo renombres, el import se actualiza a la extensión nueva. Eso es de una fase posterior. Hoy no renombres nada.

### `"types": []` apaga los tipos que acabas de instalar

```json
"types": []
```

Si `types` está presente, TypeScript incluye solo los paquetes listados. Un array vacío significa ninguno. `@types/react` y `@types/react-dom` quedan instalados y fuera del chequeo. JSX, `useState`, `ReactNode` y el resto no tienen tipos.

La solución es borrar la opción. Sin `types`, el compilador incluye solo los `@types` de los paquetes que están en `node_modules`. Entran React y React DOM, y no entra un `@types/node` que no instalaste y que tampoco quieres: esta app corre en el navegador.

No pongas `"types": ["vite/client"]` como reemplazo. Esa lista también es cerrada: ganarías los tipos de Vite y perderías los de React, salvo que enumeres todo a mano. Los tipos de Vite se cargan de otra forma, porque no viven en un paquete `@types`. Viven dentro de `vite`.

Crea `src/vite-env.d.ts` con una sola línea:

```ts
/// <reference types="vite/client" />
```

Ese archivo es parte del programa (la nota 04 limita el programa a `src`). La referencia enseña a TypeScript que un import de `.css`, `.svg` o `import.meta.env` es un módulo, no un error. Hace falta en cuanto un archivo chequeado importe CSS. `src/main.jsx` ya importa `./styles/index.css`. Mientras `checkJs` esté en false, ese `.jsx` no se chequea. El `.d.ts` queda listo para el primer `.tsx`.

No hace falta `@types/node` ni `"types": ["node"]`. El comentario que dejó `tsc --init` es para un programa de Node. Aquí `document` y `HTMLElement` vienen de la librería DOM, no de Node.

### El compilador no debe emitir archivos

Hoy:

```json
"sourceMap": true,
"declaration": true,
"declarationMap": true
```

`declaration` escribe un `.d.ts` por cada archivo. `declarationMap` escribe el mapa hacia el fuente. `sourceMap` escribe `.js.map`. Las tres sirven cuando publicas una librería y quien la consume necesita tipos. Este portafolio no se publica a npm. Quien lo abre recibe el bundle de Vite.

Y `outDir` está comentado. Si corres `tsc` con `declaration: true` y sin `noEmit`, los `.d.ts` pueden aparecer al lado de `src`.

La opción que corta las tres:

```json
"noEmit": true
```

Quita `sourceMap`, `declaration` y `declarationMap`. Con `noEmit` no tienen efecto, y si alguien las lee cree que este proyecto genera declaraciones.

`rootDir` y `outDir` siguen comentados. No hacen falta si no hay salida.

### Target y lib, explícitos

Hoy `"target": "esnext"` y `lib` comentada, con un ejemplo de Node (`"lib": ["esnext"]`).

`target` es el JavaScript que `tsc` acepta y, si emitiera, el que bajaría de nivel. Con `noEmit`, Vite igual transpila por su cuenta. El target sigue importando porque, si no fijas `lib`, TypeScript elige una librería por defecto a partir del target. Conviene no depender de ese implícito.

Para una SPA de Vite el conjunto estable es el del template oficial de React:

```json
"target": "ES2022",
"lib": ["ES2022", "DOM", "DOM.Iterable"],
"useDefineForClassFields": true
```

`ES2022` es sintaxis que los navegadores actuales ya ejecutan. `ESNext` se mueve con cada versión de TypeScript y no describe mejor esta app. `DOM` es `document`, elementos, eventos. `DOM.Iterable` hace que `NodeList` se pueda recorrer con `for...of`. Sin DOM, el primer `document.getElementById("root")` de `src/main.jsx`, el día que ese archivo se chequee, no tiene tipo.

`useDefineForClassFields: true` alinea las clases con el comportamiento nativo, que es el que usa SWC. Con target `ES2022` ya es el default. Dejarlo escrito evita que un cambio de target lo apague en silencio. Si no usas clases, no vas a notarlo. Si más adelante hay un campo de clase, TS y el bundle coinciden.

### Dos strict que no son `strict`

```json
"noUncheckedIndexedAccess": true,
"exactOptionalPropertyTypes": true
```

No forman parte de `"strict": true`. Son más estrictos.

`noUncheckedIndexedAccess` hace que `lista[0]` sea `T | undefined`, aunque tú sepas que el índice existe. Hay que estrechar el tipo en cada lectura. Es una buena red en un código que ya es TypeScript.

`exactOptionalPropertyTypes` distingue “la propiedad no está” de “la propiedad está y vale `undefined`”. Muchos tipos de React y de librerías no fueron escritos con esa distinción. El error aparece en el `.d.ts` de otro, y se siente como un fallo tuyo.

En la fase 0 las dos se quitan. `strict` ya es el nivel alto. Estas dos se anotan para el final, cuando no queden `.jsx` y el typecheck lleve tiempo en verde. Encenderlas ahora mezcla “aprendí a tipar este componente” con “el índice 0 puede no existir”.

Las opciones de estilo que están comentadas (`noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`, y las demás) se quedan comentadas. `strict` no incluye “variable sin usar”. Eso ya lo mira ESLint en los `.js` / `.jsx`. Cuando entre `typescript-eslint`, el lugar de esa regla es ESLint, no un segundo sistema dentro de `tsc`.

## Vite también está tapando los `.ts`

En `vite.config.js`:

```js
resolve: {
  extensions: ['.js', '.jsx', '.json'],
},
```

Vite, si no tocas `resolve.extensions`, busca `.mjs`, `.js`, `.mts`, `.ts`, `.jsx`, `.tsx` y `.json`. Este bloque reemplaza esa lista. Hoy no se nota, porque todo es `.js` o `.jsx`. El primer `import { Header } from "./Header"` que apunte a un `Header.tsx` no va a resolver.

La solución es borrar el bloque `resolve.extensions` entero, no alargarlo con `.ts` y `.tsx`.

Alargar la lista parece un arreglo y deja el problema: cada versión de Vite puede añadir una extensión (`.mts` ya está en el default) y este array se queda corto. No hay en el config otra razón para sustituir el default. El bloque de `esbuild.loader` que está comentado encima tampoco la justifica.

Vite sigue resolviendo `.js`, `.jsx` y `.json` porque eso ya está en su lista.

## En simple

Hay dos revisiones y las dos hacen falta. `npm run typecheck` mira si los tipos cuadran y no abre la página. `npm run dev` abre la página y no mira los tipos. Si solo haces una, la otra puede estar mal sin que te enteres.

En este proyecto los datos se importan sin extensión (`../../data/skills`). Renombrar `skills.js` a `skills.ts` no obliga a cambiar ese import. El archivo que sí escribe la extensión es `src/main.jsx` (`./App.jsx`), y ese se toca al final.
