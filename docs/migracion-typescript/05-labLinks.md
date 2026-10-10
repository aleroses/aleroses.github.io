# 05. `labLinks`: la forma de un dato

Archivo: `src/data/labLinks.js`. Al terminar se llama `labLinks.ts`.

No escribas `// @ts-check`. Cambiar la extensión ya mete el archivo en la revisión de TypeScript.

Nadie importa este archivo. La página de labs lee los proyectos desde los JSON de traducciones. Puedes practicar aquí sin romper la pantalla. Aun así, al final corre `npm run dev` para confirmar que la página sigue igual.

## Una forma con nombre

Cada enlace del archivo tiene dos textos: `name` y `url`. Nada más. Esa repetición se puede nombrar.

```ts
type LabLink = {
  name: string;
  url: string;
};
```

`type` le pone nombre a una forma. `string` quiere decir “un texto”. No importa si el texto es `"Look Movie"` o cualquier otro.

`interface` también puede nombrar un objeto. Para esta lista hace el mismo trabajo. En la fase 1 usa solo `type`, para tener una sola palabra. Más adelante aparece un caso que `interface` no cubre: un valor que solo puede ser una de varias palabras. Eso es la nota 06.

## La lista

El arreglo se anota con esa forma. `readonly` dice que el programa no va a hacer `push`, `pop` ni `sort` sobre esta lista. Es un catálogo, no una lista que la pantalla reordena.

```ts
export const labLinks: readonly LabLink[] = [
  { name: "Look Movie", url: "https://ejemplo.github.io/peliculas/" },
];
```

El ejemplo tiene un solo enlace para que se vea la forma. En tu archivo dejas los nueve que ya existen, con las mismas `url`.

`LabLink[]` se lee “lista de enlaces”. Sin esa anotación, TypeScript también adivina bastante, porque ve los objetos. Escribirlo a mano sirve para otra cosa: si mañana falta `url`, o escribes un número donde va un texto, el error sale en el dato nuevo y no en una pantalla lejana.

## Pedirle el tipo al dato

`typeof` lee el tipo de algo que ya existe. No es el `typeof` de JavaScript que dice `"string"` o `"object"` en runtime. Este se borra al compilar. Solo lo ve TypeScript.

```ts
type UnaFila = (typeof labLinks)[number];
```

Se lee por partes:

- `typeof labLinks` es “el tipo de la lista entera”.
- `[number]` es “un elemento cualquiera de esa lista”. `number` aquí no significa el número 0. Significa “un índice”.

Si la lista está anotada como `readonly LabLink[]`, `UnaFila` sale igual que `LabLink`. Escribiste la forma dos veces y las dos coinciden. Por eso el archivo se queda con el `type LabLink` de arriba. La línea de `UnaFila` no se guarda.

## `as const`, y por qué no se queda

Si al final del arreglo escribes `as const`, TypeScript deja de pensar “`name` es un texto” y pasa a pensar “`name` es exactamente `"Look Movie"`, o exactamente `"Memorigame"`, o cada título que esté escrito”.

Eso sirve cuando el programa compara contra esa lista cerrada. Por ejemplo, un idioma que solo puede ser `"es"` o `"en"`. Aquí nadie pregunta “¿este título es exactamente Look Movie?”. Un enlace nuevo, con otro nombre, tiene que seguir siendo válido. `string` es el tamaño justo.

El archivo se queda con `readonly LabLink[]`, sin `as const` y sin la línea de `UnaFila`.

## Dónde se mira el tipo

Esto no es un comando y no es la página del navegador. Es una caja flotante del editor, y es opcional. Si el archivo ya tiene `type LabLink` y `readonly LabLink[]`, la fase está hecha. No hace falta el experimento para pasar.

Si quieres verlo una vez:

1. Deja el mouse quieto medio segundo encima de la palabra `labLinks` en `export const labLinks`.
2. Aparece una caja. Con el archivo bien anotado dice `readonly LabLink[]`. Eso es “mirar el tipo”.
3. Si la caja no sale, pon el cursor de texto en esa palabra y pulsa Ctrl+K y después Ctrl+I.

Para ver qué cambia `as const`, escríbelo justo antes del `;` de la lista, vuelve a posar el mouse en `labLinks`, y la caja pasa a enumerar cada título. Luego borras `as const`. Para `typeof`, escribes la línea de `UnaFila`, posas el mouse en `UnaFila`, ves que coincide con `LabLink`, y borras la línea. Nada de eso se guarda.

## Cómo saber que este archivo está listo

```bash
npm run typecheck
npm run dev
```

El typecheck acaba sin errores. La página se ve como antes. El archivo se llama `labLinks.ts`, exporta `labLinks`, y tiene el `type LabLink` escrito a mano.

## En simple

Cambias `.js` por `.ts`. Nombras la forma `{ name, url }`. La lista es de esa forma y no se modifica. `as const` y `typeof` explican una idea; no son un paso que tenga que quedar en el archivo. El tipo se mira en una caja del editor, al dejar el mouse sobre el nombre.
