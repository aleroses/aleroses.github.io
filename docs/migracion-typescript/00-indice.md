# Migración a TypeScript

Estas notas son la bitácora. El código lo cambias tú.

Para saber qué estudiar, sin los pasos de instalación, abre [mapa-de-fases.md](mapa-de-fases.md).

`npm run deploy` publica solo `dist`. Esta carpeta no sale al sitio.

## Fase 0 — cerrada

`npm run typecheck` termina sin errores. Para repasar: [resumen-fase-0.md](resumen-fase-0.md).

Las notas largas, por si quieres el porqué de cada opción:

| Nota | Qué decidió |
| --- | --- |
| [01-npm-audit.md](01-npm-audit.md) | No usar `npm audit fix --force` |
| [02-typescript-en-el-proyecto.md](02-typescript-en-el-proyecto.md) | TypeScript dentro del repo, y un script que solo revisa tipos |
| [03-leer-el-tsconfig.md](03-leer-el-tsconfig.md) | Ajustar el `tsconfig` a Vite |
| [04-strict-y-allowJs.md](04-strict-y-allowJs.md) | `strict` en lo nuevo, y dejar convivir `.js` con `.ts` |

## Fase 1 — cerrada

`labLinks.ts`, `skills.ts` y `socialLinks.ts` pasan el typecheck. Para repasar: [resumen-fase-1.md](resumen-fase-1.md).

| Nota | Qué quedó |
| --- | --- |
| [05-labLinks.md](05-labLinks.md) | La forma `{ name, url }` y una lista `readonly` |
| [06-skills.md](06-skills.md) | `"stroke"` o `"fill"`, y el icono como componente |

## Fase 2 — ahora

| Nota | Qué haces tú |
| --- | --- |
| [07-useAnimatedIcons.md](07-useAnimatedIcons.md) | Pasar el hook a `.ts` y decirle qué lista recibe |
| [resumen-fase-2.md](resumen-fase-2.md) | Lo que hay que recordar al terminar |

## Cómo usarlas

1. Si solo vas a repasar, lee el resumen de la fase. No hace falta rehacer los pasos.
2. Si vas a hacer la fase actual, lee la nota completa y aplica el cambio tú.
3. Al terminar, `npm run typecheck` y `npm run dev`. En verde quiere decir que el typecheck acaba sin errores.

ESLint sigue mirando solo `.js` y `.jsx`. Un `.ts` nuevo no pasa por esas reglas todavía. Eso se ve en una fase posterior.
