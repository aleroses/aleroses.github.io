# 04. `strict` desde el inicio, y `.js` conviviendo con `.ts`

## `strict` ya está encendido

En tu `tsconfig.json`, `"strict": true` ya está. No hay un interruptor por archivo. Es del proyecto: todo archivo que el compilador chequea pasa por ese paquete.

El paquete incluye, entre otras:

- `noImplicitAny`: un parámetro o variable sin tipo no se vuelve `any` en silencio.
- `strictNullChecks`: `null` y `undefined` no se asignan a `string`, `HTMLElement`, etc., salvo que el tipo los admita.
- `strictFunctionTypes`, `strictBindCallApply`, `strictPropertyInitialization`, `noImplicitThis`, `useUnknownInCatchVariables`, `alwaysStrict`.

Apagar `strict` y reactivarlo “cuando terminemos” enseña a escribir tipos flojos y obliga a rehacerlos. La fase 0 lo deja en true. Los archivos viejos no sufren ese rigor si no entran al chequeo. Los nuevos sí, el día que nacen como `.ts` o `.tsx`.

## La convivencia son dos opciones distintas

```json
"allowJs": true,
"checkJs": false
```

`allowJs` mete los `.js` y `.jsx` en el programa. Un `.tsx` puede importar `LanguageContext.jsx` o `skills.js`. Sin esto, el primer componente migrado no puede hablar con el resto de la app, y la migración archivo por archivo es imposible.

`checkJs` decide si esos JavaScript se typechequean. El default es false. Déjalo escrito en false igual: dentro de seis meses el archivo tiene que decir la decisión, no el default de aquella versión.

Con `checkJs: false`, un `.jsx` se puede importar y TypeScript no reporta errores dentro de él. Infiere lo que puede para el archivo que lo importa (un componente sin tipos se ve bastante como `any`, y `strict` no te salva de un `any` que vino de un JS). Eso es aceptable mientras el archivo siga en JS. El rigor llega cuando lo renombras.

`checkJs: true` en todo `src` hoy es la peor opción de las dos. Son unos veintitantos JSX, y el compilador los trataría como TypeScript mal anotado: props implícitas, `document` si falta DOM, imports de CSS, eventos sin tipo. El ruido tapa el archivo que sí estás migrando.

Hay un término medio para un solo archivo, sin renombrarlo. La primera línea del `.js` o `.jsx`:

```js
// @ts-check
```

Ese archivo se chequea con `strict`. El resto no. Sirve cuando quieres ver los errores de un módulo antes de cambiarle la extensión. No lo pongas en todos. Es una lupa, no el modo de la fase 0.

Lo contrario también existe: `// @ts-nocheck` arriba de un `.tsx` apaga el chequeo de ese archivo. No lo uses para guardar un archivo migrado que no compila. Si hace falta, es señal de que ese archivo no era el siguiente.

## A quién incluye el programa

Sin `"include"`, y con `allowJs: true`, TypeScript agarra los `.ts`, `.tsx`, `.js` y `.jsx` de la carpeta del `tsconfig` y de sus subcarpetas, salvo `node_modules`. Entrarían `vite.config.js` y `eslint.config.js`, que Vite y ESLint ejecutan por su cuenta y que no son la app.

```json
"include": ["src"]
```

El programa es `src`. `src/vite-env.d.ts` (nota 03) queda dentro. `vite.config.js` queda fuera, y puede seguir siendo JavaScript todo el tiempo que quieras: Vite no necesita que sea `.ts` para construir el sitio.

No pongas `rootDir` ni `outDir`. Con `noEmit` no hay carpeta de salida que ordenar.

## Qué le pasa a un archivo el día que lo renombras

1. `Header.jsx` pasa a `Header.tsx`.
2. Quien lo importa sin extensión (`src/App.jsx` importa `./portfolio/components/Header`) sigue igual, siempre que hayas quitado el `resolve.extensions` de la nota 03. Vite encuentra `.tsx` por su cuenta.
3. Quien lo importa con extensión (como hace `src/main.jsx` con `./App.jsx`) tiene que actualizar esa extensión. Si no, el import apunta a un archivo que ya no existe.
4. A partir de ese momento `strict` aplica a ese archivo. Los `.jsx` que él importe siguen sin chequearse.
5. `npm run typecheck` es el comando que te dice si el archivo nuevo está bien. `npm run dev` solo dice si Vite pudo transpilarlo.

El orden de los archivos, de menos a más enredado, no se decide en esta nota. Se decide cuando el typecheck de la fase 0 esté en verde. Un buen primer candidato es un módulo sin JSX y con pocos imports, por ejemplo algo en `src/data/`. Un contexto o `App.jsx` es de los últimos: los importa medio proyecto.

## Cierre de la fase 0

Esto es el `tsconfig.json` después de las notas 03 y 04. Cada opción está explicada arriba o en la nota 03. Si una línea no la sabes justificar, vuelve a esa nota antes de pegarla.

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "jsx": "react-jsx",

    "strict": true,
    "allowJs": true,
    "checkJs": false,

    "noEmit": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

Fuera de este archivo, en esta misma fase:

- `src/vite-env.d.ts` con `/// <reference types="vite/client" />`.
- Borrar `resolve.extensions` de `vite.config.js`.
- El script `"typecheck": "tsc --noEmit"` de la nota 02.
- `typescript` en `devDependencies`.

Siguen apagadas a propósito: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, y las de variables sin usar.

## Cómo saber que la fase 0 cerró

Tú aplicas los cambios y corres:

```bash
npm run typecheck
npm run dev
npm run build
```

`typecheck` termina sin errores y sin crear `.js`, `.d.ts` ni `.map` dentro de `src`. `dev` y `build` se comportan como antes de tocar el `tsconfig`. No tiene que haber ningún archivo renombrado a `.ts` o `.tsx` para que esto sea verdad. El único TypeScript nuevo es `src/vite-env.d.ts`.

Si `typecheck` se queja de `vite.config.js` o de `eslint.config.js`, `include` no está limitado a `src`. Si se queja de JSX en un `.jsx`, `checkJs` no está en false. Si escribe archivos, `noEmit` no está activo.

## En simple

No pongas `// @ts-check` al migrar. Ese comentario solo sirve si el archivo sigue siendo `.js` y quieres una vista previa. Aquí se cambia la extensión a `.ts` y se trabaja en ese archivo.

“En verde” quiere decir que corres `npm run typecheck` y no sale ningún error.

Los archivos de `src/data/` se importan sin extensión, así que pasarlos a `.ts` no obliga a editar quien los usa. Las páginas se quedan en `.jsx` hasta una fase posterior.
