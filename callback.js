console.log( "Start" );
function importAction( username, cb ) {
    setTimeout( () => {
        cb( `Subscribe to my YT channel` );
    },0)
}

const message = importAction( "Sumit", function ( message ) {
    console.log( message );
} );

console.log( 'stop' );

const sub = new Promise( ( res, rej ) => {
    setTimeout( () => {
        const result = true;
        if ( result ) res( 'Subscribe to My channel' );
        else rej( new Error( "Why didn't you subscribe?" ) );
    }, 2000 );
} )

sub.then(
    ( res ) => {
        console.log( res );
    } )
    .catch( ( err ) => {
        console.error( err );
    } );