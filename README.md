# Evaluation of Dependency Injection Frameworks

This repo shows a comparison between two dependency injection (DI) frameworks,
namely [TSyringe](https://github.com/microsoft/tsyringe) and [TypeDI](https://github.com/typestack/typedi).

## Evaluation of Frameworks

The following comments come from working knowledge of two other frameworks, Inversify and typed-inject.

* I have been using typed-inject for a while in another project and I can’t stand it. The configuration is clumsy and bloated. It seems like you have to jump through a lot of hoops, just for type checking in your config.
* TypeDI and TSyringe seem almost the same.

### Inversify

* :x: No auto injection making configuration more labor intensive and more code.
* :white_check_mark: Docs are good.
* :white_check_mark: Most popular.
* :x: Not evolving with newer features.

### TSyringe

* :white_check_mark: Auto injection makes for cleaner configuration.
* :white_check_mark: Docs are good.
* :white_check_mark: Singletons are more clearly marked and understood making code more readable.
* :white_check_mark: Developed by Microsoft, which should give it some staying power.
* :x: Provider syntax is a little clunky but allows for customization

### TypeDI
* :white_check_mark: Auto injection makes for cleaner configuration.
* :x: Documentation was incomplete (see [Service decorator](https://docs.typestack.community/typedi/02-basic-usage-guide/04-service-decorator)
  and [Container API](https://docs.typestack.community/typedi/02-basic-usage-guide/03-container-api)).
* :x: Every dependency is a singleton by default and you must declare it as transient if you want it otherwise. This can lead to accidental singleton usage.

## Conclusion

Me and another developer on my team settled on[TSyringe](https://github.com/microsoft/tsyringe) :sparkles:
as it seemed to have the most positives going for it.

## Running the Demo
```
nvm node 18 # or whatever Node version management tool you use.
npm i
npm run build
npm run start:tsyringe # shows log messages
npm run start:typedi
```

Sample output:
```
{"level":30,"time":1669211464742,"pid":69308,"msg":"inside demo-tsyring.ts"}
{"level":30,"time":1669211464743,"pid":69308,"msg":"Service: hello tsyring"}
{"level":30,"time":1669211464743,"pid":69308,"msg":"ChildDependency: hello parent"}
{"level":30,"time":1669211464743,"pid":69308,"msg":"Singleton: hello. I have been called 1 times."}
{"level":30,"time":1669211464743,"pid":69308,"msg":"Singleton: hello. I have been called 2 times."}
{"level":30,"time":1669211464743,"pid":69308,"msg":"Service: env = dev"}
```
