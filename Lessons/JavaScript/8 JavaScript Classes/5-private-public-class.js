class Pizza{
    crust = 'original'; // public variable(field)
    #sauce = 'traditional'; // private variable(field)
    #size;

    constructor(pizzaSize){
        this.#size = pizzaSize;
    }

    setSize(pizzaSize){
        this.#size = pizzaSize;
    }

    getSize(){
        return this.#size;
    }

    bake(){
        return console.log(`I baked a ${this.#size} ${this.#sauce} sauced ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza();
myPizza.setSize('medium');
myPizza.getSize();
myPizza.bake();