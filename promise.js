/*method 1 to create promise--> const res = new Promise( function ( resolve, reject ) {
    setTimeout( () => {
        console.log( "I'm done bro." )
        resolve();
    }, 1000 )
} )

res.then( () => {
    console.log( "Let's strat again" );
} )
*/

//Method 2: To create a promise using the Promise.resolve() and Promise.reject

new Promise( function ( resolve, reject ) {
    setTimeout( () => {
        resolve( "I'm done bro." )
        new Promise( ( resolve, reject ) => {
            setTimeout( () => {
                resolve( "What do you want?" )
            },500
        )}).then(( res ) => { console.log( res ) })
        
    }, 1000 )
} ).then( ( res ) => { console.log( res ) } ).catch( ( err ) => {
    console.log( err )
})