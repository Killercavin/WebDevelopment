// Factory unctions can be used to get rid of the private variables in JS classes


function pizzaFactory(pizzaSize){
    const size = pizzaSize;
    const crust = 'original';

    // the code below is aimed at returning a method inside of a funtion

    return {
        bake: () => console.log(`Wow, you have baked a ${size} ${crust} pizza!`)
    }
}

const myPizza = pizzaFactory('huge');
myPizza.bake();