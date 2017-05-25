'use strict';
function VehicleConstructor(name, numWheels, numPass, speed=0)
{
    this.name = name;
    this.speed = speed;
}

VehicleConstructor.prototype.accelerate = function()
{
    this.speed = this.speed + 1;
    console.log('speed up!!');
}

const v1 = new VehicleConstructor('bus', 0)

// // function Vehicle(name, numOfWheels, numOfPassengers, speed)
// var Vehicle = function(name, numOfWheels, numOfPassengers, speed = 0)
// {
//     const vehicle = {
//         name, 
//         numOfWheels, 
//         numOfPassengers, 
//         speed,
//         makeNoise : () => {
//             console.log('beep beep')
//         }
//         // , accelerate : () => {vehicle.speed += 1;}
//     };

//     return vehicle;
// };

// Vehicle.prototype.accelerate = function(){
//     // if(!this.speed)
//     //     this.speed = 0;
//     //this.speed = this.speed + 1;
//     console.log('speed up!!');
// };


// const v1 = Vehicle('sedan', 4, 5, 70);
// const v2 = Vehicle('big rig', 16, 5, 70);
// const v3 = Vehicle('bus', 24, 5, 70);
// // v3.makeNoise();
// // const bike = Vehicle('bike', 2, 1, 5);
// // bike.makeNoise = () => { console.log('ring ring')};
// // bike.makeNoise()

// // const bus = Vehicle('bus', 10, 0, 55);
// // bus.makeNoise = () => { console.log('honk honk')};
// // bus.pickUpPassengers = function(numPassToPickup){
// //     this.numOfPassengers += numPassToPickup;
// // }

// // bus.makeNoise();
// // bus.pickUpPassengers(6);
// // bus.pickUpPassengers(12);
// // console.log(`bus.numOfPassengers ${bus.numOfPassengers}`)

// // bus.accelerate();
// // bus.accelerate();
// // bus.accelerate();
// // bus.accelerate();
// // bus.accelerate();
// // bus.accelerate();
// // console.log(`bus.speed ${bus.speed}`)
