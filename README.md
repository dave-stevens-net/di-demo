# Evaluation of Dependency Injection Frameworks

This repo shows a comparison between two dependency injection (DI) frameworks,
namely [TSyringe](https://github.com/microsoft/tsyringe) and [TypeDI](https://github.com/typestack/typedi).

## Evaluation of Frameworks

The following comments come from working knowledge of two other frameworks, Inversify and typed-inject.

* I have been using typed-inject for a while in another project and I can’t stand it. The configuration is clumsy and bloated. It seems like you have to jump through a lot of hoops, just for type checking in your config.
* TypeDI and TSyringe seem almost the same.

## Inversify

* [-] No auto injection making configuration more labor intensive and more code.
* [+] Docs are good.
* [+] Most popular.
* [-] Not evolving with newer features.

TSyringe

* [+] Auto injection makes for cleaner configuration.
* [+] Docs are good.
* [+] Singletons are more clearly marked and understood making code more readable.
* [+] Developed by Microsoft, which should give it some staying power.
* [-] Provider syntax is a little clunky but allows for customization

TypeDI
* [+] Auto injection makes for cleaner configuration.
* [-] Documentation was incomplete (see @Service decorator and Container API).
* [-] Every dependency is a singleton by default and you must declare it as transient if you want it otherwise. This can lead to accidental singleton usage.

## Running the Demo
```
nvm node 18 # or whatever Node version management tool you use.
npm i
npm run build
npm run start:tsyringe # shows log messages
npm run start:typedi
```
