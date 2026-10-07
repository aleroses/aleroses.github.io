# 01. Las vulnerabilidades de `npm audit`

## Qué pasó

Al instalar `@types/react` y `@types/react-dom`, npm auditó el árbol completo: 302 paquetes. El mensaje fue 26 vulnerabilidades (2 low, 2 moderate, 22 high, 0 critical).

Esos `@types` son definiciones de tipos. No se ejecutan en el navegador ni en el build. El audit no las está señalando a ellas. Está señalando dependencias que el proyecto ya tenía: Vite, React Router, gh-pages, commitizen y librerías que esas herramientas arrastran (minimatch, micromatch, braces, lodash, y otras).

Un número alto en `npm audit` no significa que el sitio esté comprometido. Significa que en el árbol hay avisos. Hay que leer de qué paquete son y si ese paquete llega a quien visita la página.

## Dos grupos distintos

**Llegan a alguien más que a tu máquina**

- `react-router` es dependencia directa (`^7.4.0`). El JavaScript de la página lo incluye. `src/main.jsx` usa `BrowserRouter`. El audit marca avisos high en ese paquete y ofrece un arreglo dentro del rango de versión que ya declaraste (`fix` semver, sin salto mayor).
- `vite` es el servidor de desarrollo y el empaquetador. Un aviso sobre el dev server importa mientras corres `npm run dev`. El bundle publicado es otra cosa: Vite no se va a `dist` como servidor.

Parte de los avisos de React Router hablan de React Server Components y de una ruta interna de manifest. Este portafolio es una SPA con `BrowserRouter`. Esas rutas no son el modo en que está armada la app. Aun así, el paquete sí viaja al navegador, y el arreglo que propone npm cabe en `^7.4.0`. Por eso es el candidato serio cuando toque actualizar, no porque haya que asustarse hoy.

**Se quedan en herramientas locales**

- `commitizen` (commits convencionales).
- `gh-pages` (el deploy).
- La cadena de globs que usan esas herramientas: `minimatch`, `micromatch`, `braces`, `picomatch`, y otras.

Esos avisos son, en su mayoría, denegación de servicio por expresiones regulares o por expansión de patrones. Hace falta que alguien controle el patrón que la herramienta expande. En este repo eso ocurre en tu computadora, al hacer commit o al publicar. No forman parte del JavaScript que ve una visita al portafolio.

## La decisión

No corras `npm audit fix --force`.

`--force` puede cambiar la versión mayor de un paquete directo. En este repo, el “arreglo” de `gh-pages` que npm marca como breaking propone bajar a `6.1.1`. Estás en `^6.3.0`. Bajar de menor para callar un audit de una herramienta de deploy es un cambio de comportamiento disfrazado de parche de seguridad. Puede romper `npm run deploy` y no mejora el sitio.

`npm audit fix` sin `--force` es otra cosa: solo aplica arreglos que respetan los rangos de `package.json`. Es razonable, y es el comando que sí usarías para `react-router` y `vite`. No es el primer comando de la migración.

La razón de separarlo: un `package-lock` nuevo mezcla dos problemas. Si mañana `tsc` falla, no sabes si fue el `tsconfig` o un Vite distinto. La fase 0 necesita una sola variable a la vez.

Orden que conviene:

1. Cierra las notas 02, 03 y 04. `npm run dev` y `npm run build` tienen que seguir pasando, y `tsc --noEmit` tiene que pasar con la configuración nueva.
2. Después, en esta misma rama, corre `npm audit fix` (sin `--force`).
3. Vuelve a correr `dev`, `build` y el typecheck.
4. Lee el audit que quede. Si lo único que pide `--force` es `gh-pages` o `commitizen`, déjalo. Esas herramientas no justifican un downgrade.

No hace falta “trabajar con las vulnerabilidades abiertas” como si fueran parte de TypeScript. Hay que no mezclarlas con la migración, y no pagar un breaking change por un número más bajo en el audit.

## Cómo comprobarlo, cuando llegue ese momento

```bash
npm audit
npm audit fix
npm run dev
npm run build
```

`npm audit` después del fix puede seguir mostrando highs. Si el arreglo disponible dice `isSemVerMajor: true` o el propio npm te manda a `--force`, ese aviso se queda anotado. No se fuerza.

## En simple

El número de avisos no se estudia. Esos avisos ya estaban en Vite, React Router y en herramientas que solo corren en tu máquina. No uses `npm audit fix --force`: en este repo eso propone bajar `gh-pages` y puede romper el deploy. Un `npm audit fix` sin `--force` puede hacerse otro día, cuando el typecheck ya esté en verde, para no mezclarlo con los tipos.
