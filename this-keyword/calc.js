// Implement a calculator like calc.add(10).multiply(5).substract(3).add(10)

//fist create an object calc and then add methods one by one
const calc = {
    total: 0,
    add( a ) {
        this.total += a;
        return this;
    },

    multiply( a ) {
        this.total *= a;
        return this;
    },

    substract( a ) {
        this.total -= a;
        return this;
    },

}
const res = calc.add( 10 ).multiply( 5 ).substract( 3 ).add( 10 );
console.log( res );