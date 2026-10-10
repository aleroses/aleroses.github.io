# 06. `skills`: dos palabras permitidas, y un icono

Archivo: `src/data/skills.js`. Al terminar se llama `skills.ts`.

`src/portfolio/pages/SkillsPage.jsx` lo importa así:

```js
import { skills } from "../../data/skills";
```

No lleva `.js` al final. Al renombrar el archivo no tocas ese import. Vite encuentra el `.ts`.

Tampoco uses `// @ts-check`.

Haz esta nota después de la 05. La forma de un objeto y `readonly` ya están explicadas ahí.

## El primer error: `withAlpha`

Al pasar el archivo a `.ts`, TypeScript se detiene en la función de arriba, antes de mirar la lista. Hoy está así:

```js
const withAlpha = (hex, alpha = "33") => `${hex}${alpha}`;
```

`strict` no acepta un parámetro sin tipo. `hex` es el color en texto, por ejemplo `"#E34F26"`. `alpha` también es texto. El `"33"` del final solo dice cuál es el valor si nadie pasa el segundo argumento. No le dice a TypeScript de qué tipo es.

```ts
const withAlpha = (hex: string, alpha: string = "33"): string =>
  `${hex}${alpha}`;
```

`: string` al final es lo que la función devuelve: sigue siendo un texto, el color con la transparencia pegada. Si se te olvida, TypeScript lo deduce del `` `${hex}${alpha}` ``. Escribirlo deja claro lo que tú crees que sale.

Cuando `npm run typecheck` se queje de `hex` o de `alpha`, el arreglo es ese. No es un fallo de la lista de skills.

## `"stroke"` o `"fill"`

En cada skill, `paint` solo tiene dos valores en todo el archivo: la palabra `"stroke"` o la palabra `"fill"`. No es un texto libre.

```ts
type Paint = "stroke" | "fill";
```

La barra `|` se lee “o”. El tipo se llama unión. Es la misma idea que el idioma del portafolio, que más adelante solo podrá ser `"es"` o `"en"`. Si escribes `paint: "filll"` con una ele de más, el error sale aquí, en el dato.

`interface` no puede expresar ese “o”. Por eso esta fase usa `type`.

## El icono no es un texto

`icon: TbBrandHtml5` guarda un componente de React, el dibujo. No es el nombre `"HTML"`. Ese nombre ya está en `name`.

`react-icons` llama a esa forma `IconType`. Es un tipo, no un componente que vayas a dibujar en este archivo. Con la configuración de la fase 0, un tipo se importa con `import type`. Si usas un `import` normal para algo que solo existe en los tipos, TypeScript lo rechaza: en el JavaScript final ese nombre no existe.

```ts
import type { IconType } from "react-icons";
```

Los iconos que sí se usan como valor (`TbBrandHtml5`, `SiJest`, y el resto) siguen importándose como ya están, desde `"react-icons/tb"`, `"react-icons/si"` y `"react-icons/ri"`. Esos sí se quedan en el JavaScript.

## La forma de una skill

`stroke` y `fill` no están en todos los objetos. HTML tiene `stroke: true` y no tiene `fill`. React tiene `fill: true` y no tiene `stroke`. En el tipo, un campo que puede faltar lleva `?`.

Cuando el campo está, el valor es `true`. Nunca es `false`. `paint` ya dice si se pinta el borde o el relleno. Por eso el campo no es un booleano cualquiera: o no está, o es exactamente `true`.

```ts
type Skill = {
  icon: IconType;
  name: string;
  color: string;
  baseColor: string;
  hoverColor: string;
  shadowColor: string;
  paint: Paint;
  stroke?: true;
  fill?: true;
};

export const skills: readonly Skill[] = [
  // los mismos objetos que ya tienes
];
```

`hoverColor: ""` en varias skills sigue siendo un `string`. La cadena vacía es un texto. No hace falta un tipo especial.

La pantalla hoy usa el icono, el nombre y los colores. `paint`, `stroke` y `fill` están en el dato y por eso entran en la forma, aunque ningún componente los lea todavía. No los borres al migrar.

## `as const` no se guarda

Si pones `as const` en las 13 skills, TypeScript arma una unión gigante: la skill HTML con sus colores exactos, o la skill CSS con los suyos, y así. `paint` sí queda en `"stroke" | "fill"`, que es lo que queremos, pero el resto de los campos también se vuelve cada texto concreto. Esa unión esconde la forma. Lo que se guarda es `readonly Skill[]`, con `Paint` e `IconType` escritos a mano.

`(typeof skills)[number]` con la lista ya anotada coincide con `Skill`. Sería escribir la misma forma dos veces. Tampoco se guarda.

Verlo es opcional y se hace en el editor, no en la terminal ni en el navegador. Deja el mouse quieto medio segundo sobre la palabra `skills` de `export const skills`. La caja debe decir `readonly Skill[]`. Si no aparece, cursor en esa palabra, Ctrl+K y luego Ctrl+I. Para el experimento, pegas `as const` antes del `;`, miras otra vez la caja, y lo borras. La línea `type UnaSkill = (typeof skills)[number]` se escribe, se mira el nombre `UnaSkill`, y se borra. El archivo que queda es el de `readonly Skill[]`.

## Cómo saber que este archivo está listo

```bash
npm run typecheck
npm run dev
```

El typecheck acaba sin errores. La página de skills se ve igual: los iconos siguen apareciendo.

`socialLinks` es el mismo ejercicio (icono y colores, sin `paint`). Si ya está en `socialLinks.ts` con `readonly` e `IconType`, también cuenta como hecho.

## En simple

Renombras a `.ts` y no tocas el import de `SkillsPage`. Le pones tipo a `withAlpha`. `paint` solo puede ser `"stroke"` o `"fill"`. El icono es un componente (`IconType`), importado con `import type`. La lista queda como `readonly Skill[]`. `as const` no se deja en el archivo. La caja del editor, al posar el mouse en `skills`, es el único lugar donde se mira el tipo.
