1. Zaczynamy od działającego ale brzydkiego, prymitywnego kodu
2. Zastanawiamy się co zrobić żeby kod był testowalny

"new" jest złe
static jest złe
interfejsy rządzą


## Before start

Use `npm i` to install local packages. Use `npm run preinstall` to install global packages.

Add `.env`. You can based on `.env.example`.

## Where to start?

In `Main.ts`, `Run()` method. This is the place for your code. Put all dependencies in a constructor (don't forget to add them to IoC `./src/IoC/IoC.ts` and optionally to `Types.ts`).

Use `npm run serve` to build and run your code continuously.