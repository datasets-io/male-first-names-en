'use strict';

var names = require( './../lib' );

var len = names.length,
	N = 10,
	idx,
	i;

for ( i = 0; i < N; i++ ) {
	idx = Math.round( Math.random()*len );
	console.log( names[ idx ] );
}
