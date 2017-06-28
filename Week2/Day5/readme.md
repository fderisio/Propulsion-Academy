# JS Advanced - Assignment

Today there are a few small projects to perform.

### ES6 Pong

Refactor your Pong game from JS Fundamentals Assignment.

The new Pong should use Webpack and ES6 classes.

No need to add any new functionality.

Keep the separation of files. Use `import` and `export` when necessary.

### Classes and Inheritance Exercise

Create the `Pet`, `Mammal`, `Dog` and `Cat` classes so that you can run the following:

```javascript
var firstPet = new Pet('Buk');
firstPet.yellName(); // BUK!!!

var firstMammal = new Mammal('Fante');
firstMammal.yellName(); // FANTE!!!
firstMammal.walk(); // Fante is going for a walk

var doggy = new Dog('Hornby', 'Laurent');
doggy.yellName(); // HORNBY!!!
doggy.walk(); // Hornby is going for a walk
doggy.bark(); // Laurent, woof woof!!!

var markov = new Cat('Markov', 'Bogdan');
markov.yellName(); // MARKOV!!!
markov.walk(); // Markov is going for a walk
markov.spoon(); // Bogdan GET OUT!
```

Output should be:

```
BUK!!!
FANTE!!!
Fante is going for a walk
HORNBY!!!
Hornby is going for a walk
Laurent, woof woof!!!
MARKOV!!!
Markov is going for a walk
Bogdan GET OUT!
```

### Advanced Exercises

Implement and add tests for the following list of functions:

- [every](https://lodash.com/docs/4.17.4#every)
- [some](https://lodash.com/docs/4.17.4#some)
- [defaults](https://lodash.com/docs/4.17.4#defaults)

*Bonus points for using TDD*

### Bonus

Convert the following ES6 code to the previous ES5:

```javascript
({ routes }) => ({ routes })
```

Implement and add tests for the following list of functions:

- [union](https://lodash.com/docs/4.17.4#union)
- [omit](https://lodash.com/docs/4.17.4#omit)
- [pickBy](https://lodash.com/docs/4.17.4#pickBy)
- [Translate to ES5](https://twitter.com/_ericelliott/status/853811545578520577)
