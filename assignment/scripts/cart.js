console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// **** SHOPPING CART PROGRAM (Grocery Store) ****

// The cart/basket, items will be added to.
let basket =[];


// Adding items to array.
function addItem (item, array){
    array.push(item);
    console.log("You added", item, "to the basket.")
    return true;
} // end addItem function

// addItem function testing.
console.log("*** - TEST - for function addItem. ***");
console.log(addItem('Bananas', basket));
console.log(addItem('Apples', basket));
console.log(addItem('Salmon', basket));
console.log(addItem('Chicken Breast', basket));
console.log(addItem('Animal Crackers', basket));
console.log(addItem('Orange Juice', basket));
console.log(basket);


// Listing each individual item in basket.
function listItems(array){
    console.log("The items in the basket are:")
    for(i = 0; i < array.length; i ++){
     console.log(array[i]); 
}// end array item log
return true;
} // end listItems function

// listItems function testing.
console.log("*** - TEST - for function listItems. Expect all array items. ***");
console.log(listItems(basket));
console.log(basket);


// // Empty basket of all items
function empty(array){
   while(array.length > 0){
    array.pop();
   }
   console.log("The basket is empty. There are now", basket.length, "items in this basket.");
   return true;
}// end empty function

// empty function testing.
console.log("*** - TEST - for function empty. Expect empty array. ***");
console.log(empty(basket));
console.log(basket);


// // **** Stretch Goal Portion ****

// const maxItems = [5];

// // Function to determine if array is full
// function itsFull(array){
//     if(array.length > maxItems){
//          console.log("Your basket is over-flowing, remove some items!");
//          return true;
//     } // end it's overfilled 
//     else if(array.length = maxItems){
//         console.log("Your basket is full!");
//         return true;
//     } // end it's full 
//     else if(array.length < maxItems){
//         console.log("You have room in your basket");
//         return false;
//     } // end extra room
// } // end itsFull function

// // itsFull function testing.
// console.log("*** - TEST - for function itsFull. ***");
// console.log(itsFull(basket)); // empty array 
// console.log(itsFull(maxItems)); // items full in array