const mathModule = require('./math');

console.log(mathModule.sayHello());
console.log(mathModule.addition(2,3));
console.log(mathModule.multiply(2,3));
console.log(mathModule.square(2));
console.log('\n\ncalls to random below');
for(var i = 0; i < 20; i++)
{
    console.log(mathModule.random(2, 9));
}