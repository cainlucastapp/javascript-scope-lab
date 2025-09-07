// Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function to add a new burger
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Always-true if statement
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Function to change the featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}