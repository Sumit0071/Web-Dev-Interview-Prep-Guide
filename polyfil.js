// create map function for array arr.map((num,i,arr)=>{})

Array.prototype.myMap = function (cb) {
    let temp = []
    for ( let i = 0; i < this.length; i++ ){
        temp.push(cb(this[i],i,this))
    }
    return temp;
}
    

const nums = [1, 2, 3, 4]
const ans = nums.myMap( (num,i,arr) => {
    return num*3
} )
console.log( ans )
//create filter function for arr.filter((num,i,arr)=>{})

Array.prototype.myFilter = function ( cb ) {
    let temp = []
    for ( let i = 0; i < this.length; i++ ){
        if ( cb( this[i], i, this ) ) {
            temp.push( this[i] )
        }
    }
    return temp;
}
    
const ans2=nums.myFilter( (num,i,arr) => {
    return num>2
} )
console.log( ans2 )

//Polyfil for arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce = function ( cb, initialValue ) {
    var accumulator=initialValue
    for ( let i = 0; i < this.length; i++ ) {
        accumulator = accumulator ? cb( accumulator, this[i], i, this ) : this[i]
        
    }
    return accumulator
}

const ans3 = nums.myReduce( ( acc, curr, i, arr ) => {
    return acc + curr
}, 0 )

console.log( ans3 )


let students = [
    { name: 'John', age: 20, marks: 90 },
    { name: 'Jane', age: 18,marks:73 },
    { name: 'chris', age: 27,marks:68 },
    
]
//return the name of the students having marks >70 and return their marks with +2
const res = students.filter( ( stu ) => stu.marks > 70 ).map( ( stu ) => { return stu.marks + 2  } )
console.log( res )