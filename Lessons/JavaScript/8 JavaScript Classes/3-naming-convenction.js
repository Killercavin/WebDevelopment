class Pizza{
    constructor(pizzaSize){
        this.crust = 'Pepperoni'
        this._size = pizzaSize; // variable declare by an underscore in JS are considered private and are bound to be modified only within the class boundaries
    }

    setSize(pizzaSize){
        this._size = pizzaSize;
    }

    getSize = () =>{
        return this._size;
    }

    // continuation of the code soon...!

    // this is not so much appropriate so check on 5-private-public-class.js file for continuation, see you there nerd! -->
}