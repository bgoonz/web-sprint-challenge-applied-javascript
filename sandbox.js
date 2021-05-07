
const fs = require( 'fs' );
let files = fs.readdirSync( './' );
console.log( files )





let today = new Date();
let dd = String( today.getDate() ).padStart( 2, '0' );
let mm = String( today.getMonth() + 1 ).padStart( 2, '0' );
let yyyy = today.getFullYear();

console.log( today )
