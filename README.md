# FunkyTown

Funkytown is an aggregate module that pulls the following libs together:

* ramda (curry)
* pointfree-fantasy (compose, map)
* data.future (Future)
* data.io


Into one lib

```
npm install funkytown
```

```
var _ = require('funkytown');
```
## API

### curry(fn)

Curry takes a function and provides the ability to partially call the function
and return another function waiting on the additional arguments, once all the
arguments are set, then it executes the function.

Example:

```
var _ = require('funkytown');
var add = _.curry(function(a,b) { return a + b; });
var add2 = add(2);
var result5 = add2(3);
# result5 === 5
```

Use case:

This is a great feature for high order function replacement, often times we want
to set some default options in a method before we apply the method on an array or
object.

```
module.exports = function(opts) {
  return function(obj) {
    ...
  }
}
```

This allows us to setup the options ahead of the actual execution of the function
which will most likely occur in some sort of chain set of operations.  Using the
curry function shortens this and makes creating these functions cake.

```
var _ = require('funkytown');
module.exports = _.curry(function(opts,obj) {
  ...
  return obj;
});
```

### compose(fn,fn,...)

Compose takes 2 or more functions as arguments and performs nested calls of the
functions from the last to the first, passing the returned value to each function.

```
var foo = compose(g, f, e);
# => g(f(e()));
```

Compose is a great way to create pure continuation features.

### map(fn, Functor)

What is a Functor?  It is an object that has a private value and at least a
map method that executes the passed in function on the value.

```
var functor = {
  val: 'foo',
  map: function(fn) {
    return fn(val);
  }
};
```

The map method will take the function and pass it in the Functors map method so
it may be executed inside the context of the object.

### mjoin(Functor, Functor, ...)

mjoin will combine or join multiple Functors of the same type.

### chain(Functor, Functor)


