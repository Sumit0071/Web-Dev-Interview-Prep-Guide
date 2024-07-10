// // console.log( res );
// function tdz() {
//     console.log(res);
//     const res = "hi";
// }


// const str = "xxy  xyxyx  xzighjd  xzik";
// function getLengieststr(str) {
//     const res = str.split( '  ' );
//     var longestStr = '';
   
//     for ( let i = 0; i < res.length; i++ ) {
//         if ( res[i].length > longestStr.length ) {
//        longestStr = res[i];
//    }
      
//     }
//     return longestStr;
    
    
// }
// console.log( getLengieststr( str ) )

// console.log( typeof('3'*5 ^ 6) )
// const count = 2;
// function createCounter() {
//     // var count = 0;

//     return {
//         increment: function() {
//             count++;
//             console.log(count);
//         },
//         decrement: function() {
//             count--;
//             console.log(count);
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// counter.increment(); // Output: 1
// counter.increment(); // Output: 2
// counter.decrement(); // Output: 1
// console.log(counter.getCount()); // Output: 1

function outerFunction() {
    
    let outerVariable = "I'm an outer variable";

    function innerFunction() {
        console.log(outerVariable); // innerFunction has access to outerVariable
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: "I'm an outer variable"
