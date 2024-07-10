



const btn = document.querySelector( '.button' );
const div = document.querySelector( '.container' );
const form = document.querySelector( ".form" );
/*------This is question of event bubbling.Event bubbling (from bottom element to upper element)------- */

/*div.addEventListener( 'click', () => {
    alert( 'div' );
} )


form.addEventListener( 'click', () => {
    alert( 'form' );
} )

btn.addEventListener( 'click', () => {
    alert( 'button' );
} )
*/
/*==============END=====================*/


/*==============Start q2) differnce between event.taget & event.currentTarget && this.target=====================*/

div.addEventListener( 'click', func );
form.addEventListener( 'click', func );
btn.addEventListener( 'click', func );

function func(e) {
    alert( 'currentTarget = '+e.currentTarget.tagName+",target= "+e.target.tagName+",this Target= "+this.tagName);
}

/*========End (Q2)===================*/