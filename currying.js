// const res = function evalutate( operation ) {
//     return function ( a ) {
//         return function( b ) {
//             switch ( operation ) {
//                 case 'add': return a + b;
//                 case 'multiply': return a * b;
//                 case 'substract': return a - b;
//                 case 'divide': return a / b;
//             }
//         }
//     }
// }

// console.log( res( "add" )( 8 )( 7 ) );


//Infinite currying func(a)(b)(c)(d)....

function add( a ) {
    return function ( b ) {
        if ( b ) {
            return add( a + b );
        }
        return a;  
    }
   
}
console.log( add( 1 )( 2 )( 3 )( 4 )() )

//partial functionioning

function addone( a ) {
    function curry( b, c ) {
        return a + b + c;
    }
return curry
}

console.log(addone(20)(9,8))