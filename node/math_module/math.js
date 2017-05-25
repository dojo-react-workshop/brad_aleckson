module.exports = {
    sayHello: function() {return "hello there"},
    addition: (num1, num2) => {return (num1 + num2)},
    multiply: (num1, num2) => {return (num1 * num2)},
    square:  (num) => {return (num * num)},
    // random:  (floor, ceiling) => {return Math.floor((Math.random() * ceiling) - (Math.random() * floor));}
    random:  (floor, ceiling) => {return Math.round((Math.random() * (ceiling-floor) + floor));}
};