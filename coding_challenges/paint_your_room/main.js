'use strict';

const orderSupplies = (item) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random() * 3000 + 1000;

  return new Promise((resolve, reject) => {
    setTimeout( () => {
        const foundItem = warehouse.find((obj) => obj.item === item);

        if (foundItem) {
            resolve(foundItem);
        }

    }, deliveryTime );
  })
}

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);

const brushPromise = orderSupplies('brush');
const paintPromise = orderSupplies('paint');

paintPromise
    .then((item) => {
        printItem(item);
        return brushPromise;
    })
    .then((item) => {
        printItem(item)
    })

// const brush = orderSupplies('brush');
// orderSupplies('paint')
//     .then((item) => {
//         printItem(item);
//         return brush;
//     })
//     .then((item) => {
//         printItem(item)
//     });



// const receiptA = new Promise((resolve, reject) => {
//     var rand = Math.random() * 1000;
//     setTimeout(() => { resolve("Boom."); }, rand);
// });

// const receiptB = new Promise((resolve, reject) => {
//     var rand = Math.random() * 1000;
//     setTimeout(() => { resolve(); }, rand);
// });

// receiptA
//     .then(function(item){
//         consoloe.log()
//     })






// const receipt = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve();}, 2000);
    
//     //reject();
// });
// receipt is now a Promise, which has exactly 3 states:
// 1. pending 
// 2. resolved
// 3. rejected
// promises can only move from pednign to resovled or rejected.  May not go backward.
// receipt.then(() => {
//             console.log('This promise has been resolved');
//         })
//         .catch(() => {
//             console.log('This promise has been rejected');
//         });

// const receiptB = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve();}, 2000);
    
//     //reject();
// });





// let paint = null;
// let brush = null;

// orderSupplies('paint', (item) => {
//     printItem(item)
//     paint = item;
//     if(brush)
//     {
//         printItem(brush);
//     }
// });

// orderSupplies('brush', (item) => {
//     if(paint)
//     {
//         printItem(item);
//     }
//     else
//     {
//         brush = item;
//     }
// });







// let paintReceived = false;
// let brush = null;
// orderSupplies('paint', (item) => {
//     // definitely want to run this 
//     printItem(item);
//     paintReceived = true;
//     // do we need to do anything else
//     // hint: if brush in garage
//     if(brush)
//         printItem(brush);
// });

// orderSupplies('brush', (item) => {
//     if(paintReceived)
//     {
//         printItem(Item);
//     }
//     else
//     {
//         brush = item;
//     }
//     // only if paint has been delivered
//     // printItem(item);
//     // otheriwse put the brush in the garage
//     //weHavePaint.on('change', function(item){printItem(item)})
    
// });



// orderSupplies('paint', printItem);
// orderSupplies('brush', printItem);

// orderSupplies('paint', (item) => {
//     printItem(item);
//     orderSupplies('brush', printItem);
// })

// orderSupplies('paint', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));
// orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));