1. Zaczynamy od teori: po co testować, jak uruchomić test, frameworki itd
2. Przykłady testów + przyjrzenie się co wypluwa konsola
PO KAŻDYM TEŚCIE DAĆ CHWILĘ NA NAPISANIE CZEGOŚ PODOBNEGO SAMEMU!
- najprostszy test z użyciem test()
- testów z użyciem describe oraz it, przy okazji jak łapać wyjątki
- test asynchroniczności
- beforeEach itp.....
- mokowanie z użyciem moqjs
3. Trochę praktyki: przerobienie beznadziejnego kodu na testowalny
  3.1. Pokazanie GUI/Workflow
  3.2 Info o tym że kod jest słaby
  3.3. W miarę pisania testów powinno wyjść że w kodzie są braki 
   (brak obsługi wyjątków: np zły guzik w menu, pusta lista opcji)
  3.3 Jak już się uda wytestować kod to spróbujemy dodać licznik czasu
4. TDD
5. DI

Czego się nauczymy?
- czym jest test
- jak uruchomić test ręcznie
- jak napisać najprostszy test (test())
- jak napisać test złożony z wielu testów (describe())
- jak nie powtarzać kodu testu (before'y, after'y)
- jak testować exceptiony (toThrow())
- jak testować asynchroniczność (expect.assertions/done)
- czym jest mock
- jak mokować zależności
- w czym pomagają interfejsy


False Positive itp...........

Czego się nie nauczymy?

- Zbyt wielu dobrych praktyk
- 

Jeśli starczy czasu:
- porozmawiamy o kontenerze DI



1. Zaczynamy od działającego ale brzydkiego, prymitywnego kodu
2. Zastanawiamy się co zrobić żeby kod był testowalny

* testowanie funkcji
* testowanie klas
* mokowanie
* testowanie I/O
* testowanie losowości
* testowanie pętli
* testowanie zależności z zależnościami

"new" jest złe
static jest złe
interfejsy rządzą


## Before start

Use `npm i` to install local packages. Use `npm run preinstall` to install global packages.

Add `.env`. You can based on `.env.example`.

## Where to start?

In `Main.ts`, `Run()` method. This is the place for your code. Put all dependencies in a constructor (don't forget to add them to IoC `./src/IoC/IoC.ts` and optionally to `Types.ts`).

Use `npm run serve` to build and run your code continuously.