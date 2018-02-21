module.exports = function solveEquation(equation) {
  // your implementation
  // const solutions = solveEquation('294 * x^2 - 141195558 * x - 1600964090384736');
var equationSplitted = equation.split(' ');
var a,b,c;
a = equationSplitted[0];
if(equationSplitted[3] == '+'){
b = equationSplitted[4];
}
else {
b = (0-(equationSplitted[4]))
}

if(equationSplitted[7] == '+'){
c = equationSplitted[8];
}
else {
c = (0-(equationSplitted[8]))
}
var d = (b * b) - 4 * a * c;

var dSqrt, xPlus, xMinus;

dSqrt = Math.sqrt(d);

xPlus = ((-b) + dSqrt) / (2 * a);
xMinus = ((-b) - dSqrt) / (2 * a);

var result = [];

result.push(xPlus,xMinus);
return result;

}

