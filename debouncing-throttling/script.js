//create a button ui and and debounce as follows =>
// q1) show button pressed <x> times
// q2) Increase triggered <y> times count after 800ms of debounce
// q3) show button pressed <y> times count after 800ms of throttling


const btn = document.querySelector( ".Increment-button" );
const btnPress = document.querySelector( ".increment_count" );
const countDebounce = document.querySelector( ".triggered_count_debounce" );
const countThrottle = document.querySelector( ".triggered_count_throttle" );

var pressedCount = 0;
var triggeredCountDebounce = 0;
var triggeredCountThrottle = 0;
const start = new Date().getTime();

// ------This part of the code is using external loadsh package for debounce nad throttle function----
// const debounceCount = _.debounce( () => {
//     countDebounce.innerHTML = ++triggeredCountDebounce;
// }, 800 )
// const throttleCount = _.throttle( () => {
// const now = new Date().getTime();
//     console.log( now - start );
//     countThrottle.innerHTML = ++triggeredCountThrottle;

// }, 800 )


/*-------Polyfil of Debounce and throttle */
const myDebounce = ( cb, delay ) => {
    let timer;
    return function ( ...args ) {
        if ( timer ) clearTimeout( timer );
        timer = setTimeout( () => {
            cb( ...args );
        }, delay )
    }
}
const myThrottle = ( cb, delay ) => {
    let last = 0;
    return function ( ...args ) {
        let now = new Date().getTime();
        if ( now - last < delay ) return;
        last = now;
        return cb( ...args );
    }
}
const debounceCount = myDebounce( () => {
    countDebounce.innerHTML = ++triggeredCountDebounce;
}, 800 )
const throttleCount = myThrottle( () => {
    triggeredCountThrottle += 1;
    countThrottle.innerHTML = triggeredCountThrottle;
}, 800 )

btn.addEventListener( 'click', () => {
    btnPress.innerHTML = ++pressedCount;
    const now = new Date().getTime();
    const seconds = ( now - start ) / 1000;
    console.log( seconds.toFixed() );
    debounceCount();
    throttleCount();
} )