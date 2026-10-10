# Resumen para estudiar: fase 2

Léelo cuando `useAnimatedIcons.ts` pase `npm run typecheck` y los iconos sigan animándose. Si todavía no migraste el hook, haz primero la nota 07.

## Lo que hay que recordar

`export type Skill` deja que otro archivo use la forma de una skill. Sin `export`, el nombre se queda dentro de `skills.ts`.

El hook importa solo el tipo:

```ts
import type { Skill } from "../data/skills";
```

La lista de datos sigue llegando como argumento. El hook no importa el arreglo `skills`.

`readonly Skill[]` se puede leer y no se puede reordenar. Hace falta el `readonly` para aceptar la lista que ya declaraste en la fase 1.

`useState<number>(-1)` es una caja con un número dentro. `-1` significa que todavía no hay un icono encendido. `<number>` rellena el hueco de `useState`: le dice qué guarda la caja.

El reloj se prende en `useEffect` con `setInterval`. La función de adentro ve `setActiveIndex` porque nació ahí. `return () => clearInterval(interval)` apaga el reloj cuando la sección desaparece. Si esa línea no está, el reloj sigue vivo.

## Qué no entra en esta fase

`useRef` no está en el portafolio. Los clics (`onClick`) están en el botón de tema, y se ven en la fase 3. El idioma `"es"` o `"en"` es la fase 4.

## La comprobación

```bash
npm run typecheck
npm run dev
```

En verde: el comando acaba sin errores y los iconos de la página de skills se siguen iluminando solos.
