class Pizza{

    constructor(pizzaType){
        this.size = 'large';
        this.crust = 'original';
        this.type = pizzaType;
        this.toppings = [];
    }

    setPizzaType(pizzaType){
        this.type;
    }

    getPizzaType(){
        return this.type;
    }

    // toppings methods

    getToppings(){
        return this.toppings; // returns the toppings
    }

    setToppings(topping){
        this.toppings.push(topping);
    }


    bake(){
        return console.log(`I am baking a ${this.size} ${this.type.toLowerCase()} ${this.crust} crust pizza tonight, welcome all!`);
    }
}

const myPizza = new Pizza('Pepperoni');
myPizza.setPizzaType('Pepperoni');
myPizza.getPizzaType();

// calling the toppings

myPizza.setToppings('Saussage');
myPizza.setToppings('Olive');
arrayOfToppings = myPizza.getToppings();

myPizza.bake();
console.log(myPizza.getPizzaType()); // logout the pizza type

console.log(arrayOfToppings); // logging array of toppings