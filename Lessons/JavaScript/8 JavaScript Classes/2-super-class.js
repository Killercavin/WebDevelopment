class Pizza{

    constructor(pizzaSize){
        this.size = pizzaSize;
        this.crust = 'original';
    }

    setCrust = (pizzaSize) =>{
        this.size = pizzaSize;
    }

    getSize = () =>{
        return this.size;
    }
}


// creating a child class from Pizza super class

class SpecialPizza extends Pizza{

    // To call functions or methods from a super class we need to use the supper(variable_to_be_called) in the child class along with the constructor

    constructor(pizzaSize){
        super(pizzaSize);

        this.type = "The Works";
    }

    slice(){
        return console.log(`Our ${this.type.toLowerCase()} ${this.size} sized pizza has 8 slices.`);
    }
    
}

const mySpecialty = new SpecialPizza('medium');

mySpecialty.slice();

// NOTE

// The super class Pizza works as a blue print of the child class SpecialPizza