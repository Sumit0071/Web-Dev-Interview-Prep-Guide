function memeoizePolyfil (fn,context)  {
    const res = {}
    return function ( ...args ) {
        var argsCache = JSON.stringify( args )
        if ( !res[argsCache] ) {
            res[argsCache]=fn.call(context || this,...args)
        }
       return res[argsCache]
            
    }
}

const clumsySquare = (num1,num2) => {
    for ( let i = 1; i < 100000; i++ ){
         return num1 * num2;
    }
}
const memoizedClumsySquare = memeoizePolyfil(clumsySquare)

console.time( "First time calling " )
console.log( memoizedClumsySquare( 232, 987 ) )
console.timeEnd( "First time calling " )



console.time( "second time calling" )
console.log( memoizedClumsySquare( 232, 987 ) )
console.timeEnd("second time calling")