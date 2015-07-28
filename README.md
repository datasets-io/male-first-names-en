English Male First Names
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> A list of common male first ([given](https://en.wikipedia.org/wiki/Given_name)) names in English speaking countries.


## Installation

``` bash
$ npm install datasets-male-first-names-en
```


## Usage

``` javascript
var names = require( 'datasets-male-first-names-en' );
```

#### names

A list of common male first names (also known as [given](https://en.wikipedia.org/wiki/Given_name) or personal names) in English speaking countries.

``` javascript
console.log( names );
/*
	[
		"Aaron",
		"Ab",
		"Abba",
		"Abbe",
		"Abbey",
		"Abbie",
		"Abbot",
		"Abbott",
		...
	]
*/
```


## Examples

``` javascript
var names = require( 'datasets-male-first-names-en' );

var len = names.length,
	N = 10,
	idx,
	i;

for ( i = 0; i < N; i++ ) {
	idx = Math.ceil( Math.random()*len ) - 1;
	console.log( names[ idx ] ); 
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## References

* 	Ward, Grady. *Moby Word II*. 2002. [Project Gutenberg](http://www.gutenberg.org/files/3201/3201.txt). Web. 27 July 2015.



## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-male-first-names-en.svg
[npm-url]: https://npmjs.org/package/datasets-male-first-names-en

[travis-image]: http://img.shields.io/travis/datasets-io/male-first-names-en/master.svg
[travis-url]: https://travis-ci.org/datasets-io/male-first-names-en

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/male-first-names-en/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/male-first-names-en?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/male-first-names-en.svg
[dependencies-url]: https://david-dm.org/datasets-io/male-first-names-en

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/male-first-names-en.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/male-first-names-en

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/male-first-names-en.svg
[github-issues-url]: https://github.com/datasets-io/male-first-names-en/issues
