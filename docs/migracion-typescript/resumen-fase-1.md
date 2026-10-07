# Resumen para estudiar: fase 1

Léelo cuando `labLinks.ts` y `skills.ts` ya pasen `npm run typecheck`. Si todavía no los migraste, haz primero las notas 05 y 06. Este resumen no reemplaza el trabajo en los archivos.

## Lo que hay que recordar

Un `type` le pone nombre a una forma.

```ts
type LabLink = { name: string; url: string };
```

`string` es “un texto”. Sirve para nombres y direcciones que pueden cambiar.

`readonly LabLink[]` es “lista de enlaces que el programa no reordena”. El dato sigue viviendo en el archivo. La pantalla lo lee.

`typeof labLinks` pregunta el tipo de la lista. `(typeof labLinks)[number]` pregunta el tipo de un elemento. Sirve para no escribir la forma dos veces. En estos dos archivos la forma escrita a mano es más clara, así que el `typeof` se probó y no se dejó en el código.

`as const` hace que TypeScript recuerde el valor exacto, no “un texto cualquiera”. En `labLinks` eso convierte cada título en parte del tipo. Nadie compara contra esa lista cerrada, así que sobra. En `skills` esconde la forma en una unión de 13 objetos. También se quita.

`"stroke" | "fill"` se lee “esta palabra o esta otra”. Un error de dedo (`"filll"`) lo marca el typecheck. La misma idea, más adelante, será `"es" | "en"`.

El icono de una skill es un componente, `IconType`, no el nombre de la tecnología. Como solo se usa de tipo, entra con `import type`.

Un campo con `?` puede no estar. `stroke?: true` quiere decir “no está, o es `true`”. Varias skills no traen `stroke`, otras no traen `fill`.

## Qué quedó decidido en los archivos

- `labLinks.ts`: `type LabLink` a mano y `readonly LabLink[]`. Sin `as const`.
- `skills.ts`: `type Paint`, `type Skill`, `readonly Skill[]`, y `withAlpha` con sus parámetros en `string`. Sin `as const`.
- `socialLinks.js` sigue en JavaScript. Es el mismo tipo de lista (icono y colores) para cuando quieras repetir el ejercicio.

## La comprobación

En verde sigue queriendo decir esto:

```bash
npm run typecheck
```

acaba sin errores. `npm run dev` abre la misma página de antes. Los imports de `skills` no llevan extensión, así que no se editan al renombrar.

## Qué no hay que memorizar

No hace falta recordar la lista de opciones del `tsconfig`. Eso está en el [resumen de la fase 0](resumen-fase-0.md).

No pongas `// @ts-check` en estos archivos. Ya son `.ts`.
