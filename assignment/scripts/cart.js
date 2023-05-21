console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// **** SHOPPING CART PROGRAM (Grocery Store) ****

// - VARIABLES -
// The cart/basket, items will be added to.
let basket =[];
// max amount of itesm allowed in basket
const maxItems = 5;
// - END VARIABLES -

// - FUNCTIONS -
// Adding items to basket.
function addItem (item){
   if (basket.length >= maxItems) {
    console.log("Sorry, no more items can be added to your basket.");
    return false;
} // end can't add item
   else if(basket.length < maxItems) {
    basket.push(item);
    console.log("You added", item, "to the basket.")
    return true;
} // end added item
} // end addItem function

// // Empty basket of all items
function empty(){
    while(basket.length > 0){
     basket.pop();
    }
    console.log("The basket is empty. There are now", basket.length, "items in this basket.");
    return true;
 }// end empty function

// Determine if basket is full
function isFull(basket){
if(basket.length < maxItems){
    console.log("You have room for items in your basket.");
    return false;
} // end room for more
else if(basket.length > maxItems){
    console.log("You have too many items in your basket. Remove some items.");
    return true;
} // end too many items
else if(basket.length = maxItems){
    console.log("Your basket is full.");
    return true;
} // end basket full
} // end isFull function

// Listing each individual item in basket.
function listItems(basket){
    if(basket.length > 0){
    console.log("The items in the basket are:")
    for(i = 0; i < basket.length; i ++){
     console.log(basket[i]); 
    }// end basket item log
    } // end listing items in basket
    else if(basket = []){
    console.log("The basket is empty.")
    } // end basket is empty
return true;
} // end listItems function

function removeItems(item){
    const index = basket.indexOf(item); // assigns index of serched item to index variable
    let removedItems = basket.splice(index, 1);
    if(index === -1){
        console.log(`The item ${item}, is not in your cart.`);
        return null;
     } // end item not in cart
    console.log("An item was removed from your cart:");
    return removedItems;
} // end item removed
// - END FUNCTIONS -

// - FUNCTION TESTING -
// addItem function testing.
console.log("*** - TEST - for function addItem. ***");
console.log(addItem('Bananas', basket));
console.log(addItem('Apples', basket));
console.log(addItem('Salmon', basket));
console.log(addItem('Chicken Breast', basket));
console.log(addItem('Animal Crackers', basket));
console.log(addItem('Orange Juice', basket));
console.log(basket);
// end addItem testing

// empty function testing.
console.log("*** - TEST - for function empty. ***");
console.log(empty()); // Expect empty basket.
console.log(basket);
console.log(addItem);
//end empty testing

// listItems function testing.
console.log("*** - TEST - for function listItems. Expect all basket items. ***");
console.log(listItems(basket));
console.log(basket);
// end listItems testing

// // isFull function testing.
console.log("*** - TEST - for function itsFull. ***");
console.log(isFull(basket)); // empty basket 
// Adding items to basket with addItem function.
console.log("*** Adding items to basket. Expect 5 items in basket. ***");
console.log(addItem("Bread"));
console.log(addItem("Chips"));
console.log(addItem("Gogurt"));
console.log(addItem("Shrimp"));
console.log(addItem("Lunchables"));
console.log(isFull(basket)); // full basket 
// Adding one last item.
console.log("*** Attempting to add one more item to basket. Expect over-filled basket. ***");
console.log(addItem("Pizza"));
console.log(isFull(basket));// Too many
// end isFull testing

// removeItems function testing.
console.log("*** - TEST - for function removeItems. ***");
console.log(removeItems("Shrimp")); // Item removed
console.log(removeItems("Candy")); // Item not in basket
//  // - END FUNCTION TESTING -