var multiply = function(x, y) {
    const z = x * y
    console.log(z)
}

const x = 10;
const y = 5;

//arrow function which has an expression, then it returns implicitly a statement
var multArrow = (x, y) => x * y

console.log(multArrow(x, y))

var multArrowCurly = (x, y) => {
    var z = x * y
    return z
}

console.log(multArrowCurly(4, 3))

const emptyFunc = () => typeof(100);
console.log(emptyFunc());

const m = 1
const n = 5
const outsideScope = () => m * n;
//const insideScope = () => z * u;
