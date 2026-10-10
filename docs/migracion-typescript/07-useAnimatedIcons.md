# 07. El reloj de los iconos

Archivo: `src/hooks/useAnimatedIcons.js`. Al terminar se llama `useAnimatedIcons.ts`.

`src/portfolio/pages/SkillsPage.jsx` lo importa sin extensión:

```js
import { useAnimatedIcons } from "../../hooks/useAnimatedIcons";
```

No tocas ese import. No escribas `// @ts-check`. El hook sigue haciendo lo mismo: cada cierto tiempo pasa al icono siguiente. Solo le pones tipos.

En este archivo no hay `useRef` ni un clic. Esos temas están en otras fases. Aquí hay una lista, un número y un reloj.

## El nombre `Skill` tiene que poder salir del archivo

En `src/data/skills.ts` el tipo ya existe, pero está escrito `type Skill`. Otro archivo no puede usarlo. Cámbialo a:

```ts
export type Skill = {
```

El resto del tipo se queda igual. `export` solo significa “este nombre se puede importar”.

En el hook:

```ts
import type { Skill } from "../data/skills";
```

`import type` otra vez: `Skill` no existe cuando la página está corriendo. Solo le sirve a TypeScript. La lista de verdad sigue llegando por el argumento, no por este import. El hook no debe importar `skills` (el dato). Si lo hiciera, quedaría atado a esa lista y no serviría para otra.

## Qué recibe y qué guarda

```ts
export const useAnimatedIcons = (skills: readonly Skill[], delay = 500) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
```

`readonly Skill[]` es la misma lista de la fase 1. El hook la lee (`skills.length`) y no la reordena. Si el tipo pidiera `Skill[]` sin `readonly`, tu lista de `skills.ts` no entraría: esa lista prometió que nadie la modifica.

`delay = 500` ya se entiende como número, porque `500` es un número. No hace falta anotarlo.

`useState<number>(-1)` es una caja que guarda un número. Empieza en `-1`: ningún icono está encendido todavía. El primer tick del reloj lo pasa a `0`, el primero de la lista.

`<number>` es el único genérico de esta fase. Un genérico es un hueco que se llena con un tipo. `useState` es la caja. `<number>` dice qué hay dentro. Sin eso, TypeScript también adivina `number` por el `-1`. Escribirlo deja la decisión a la vista.

No armes un tipo “índice 0 o 1 o 2…”. `-1` tiene que caber, y la lista puede crecer. `number` es el tamaño justo.

## El reloj y por qué se apaga

Esto ya está en el archivo. No se reescribe la lógica. Sirve entenderla antes de darla por buena.

`useEffect` corre después de que la sección de skills aparece. Ahí dentro, `setInterval` prende un reloj. Cada `delay` milisegundos llama a esta función:

```ts
setActiveIndex((prevIndex) =>
  prevIndex === skills.length - 1 ? 0 : prevIndex + 1,
);
```

Esa función nació dentro del efecto, así que puede ver `setActiveIndex` y `skills.length`. Una función que sigue viendo las variables del sitio donde nació es un cierre. No tienes que crear uno aparte. El que ya está en el `setInterval` es el ejemplo.

`return () => clearInterval(interval)` es la limpieza. React llama a esa función cuando la sección de skills deja de mostrarse, y también justo antes de volver a correr el efecto. `clearInterval` apaga el reloj. Si no estuviera, el reloj seguiría pidiendo “cambia el icono” en una sección que ya no está en la página.

La lista del final, `[skills.length, delay]`, dice cuándo hay que apagar el reloj viejo y prender otro: si cambia cuántas skills hay, o si cambia la espera.

El comentario `// -1 = 9` no describe el código. Se puede borrar. No es parte del tipo.

## Cómo saber que está listo

```bash
npm run typecheck
npm run dev
```

El typecheck acaba sin errores. En la página, los iconos de skills siguen encendiéndose uno tras otro. No cambies el tiempo ni el `-1` inicial.

## En simple

Exportas `type Skill`. El hook recibe `readonly Skill[]` y guarda un `number` que empieza en `-1`. El efecto prende un reloj y, al irse la sección, lo apaga. No se toca el import de `SkillsPage`. `useRef` y los clics no entran en este archivo.
