# Resumen para estudiar: fase 1

La fase 1 está cerrada. `npm run typecheck` pasa con `labLinks.ts`, `skills.ts` y `socialLinks.ts`.

## Lo que hay que recordar

Un `type` le pone nombre a una forma.

```ts
type LabLink = { name: string; url: string };
```

`string` es “un texto”. Sirve para nombres y direcciones que pueden cambiar.

`readonly LabLink[]` es “lista de enlaces que el programa no reordena”. El dato sigue viviendo en el archivo. La pantalla lo lee.

`typeof labLinks` pregunta el tipo de la lista. `(typeof labLinks)[number]` pregunta el tipo de un elemento. Sirve para no escribir la forma dos veces. En estos archivos la forma escrita a mano es más clara, así que esa línea no está en el código.

`as const` hace que TypeScript recuerde el valor exacto, no “un texto cualquiera”. En `labLinks` eso convierte cada título en parte del tipo. Nadie compara contra esa lista cerrada, así que no está. En `skills` escondería la forma en una unión de 13 objetos. Tampoco está.

Eso se mira en el editor: mouse quieto sobre el nombre de la lista, y sale una caja con el tipo. No es un comando. El experimento de pegar `as const` y borrarlo es opcional. Tus archivos ya están bien sin él.

`"stroke" | "fill"` se lee “esta palabra o esta otra”. Un error de dedo (`"filll"`) lo marca el typecheck. La misma idea, más adelante, será `"es" | "en"`.

El icono de una skill es un componente, `IconType`, no el nombre de la tecnología. Como solo se usa de tipo, entra con `import type`.

Un campo con `?` puede no estar. `stroke?: true` quiere decir “no está, o es `true`”. Varias skills no traen `stroke`, otras no traen `fill`.

## Qué quedó decidido en los archivos

- `labLinks.ts`: `type LabLink` a mano y `readonly LabLink[]`.
- `skills.ts`: `type Paint`, `type Skill`, `readonly Skill[]`, y `withAlpha` con sus parámetros en `string`.
- `socialLinks.ts`: la misma idea que las skills, sin `paint`. `id` se quedó en `string`. Alcanza, porque la pantalla solo lo usa como clave.

## La comprobación

En verde sigue queriendo decir esto:

```bash
npm run typecheck
```

acaba sin errores. `npm run dev` abre la misma página de antes. Los imports de `skills` no llevan extensión, así que no se editan al renombrar.

## Qué no hay que memorizar

No hace falta recordar la lista de opciones del `tsconfig`. Eso está en el [resumen de la fase 0](resumen-fase-0.md).

No pongas `// @ts-check` en estos archivos. Ya son `.ts`.
