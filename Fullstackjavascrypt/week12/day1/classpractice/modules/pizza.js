

function make_pizza(size, ...toppings) {
    console.log(`\nMaking a ${size}-inch pizza with the following toppings:`)
    for (topping of toppings) {
        console.log("- " + toppings)
    }
}

module.exports = {
    make_pizza: make_pizza,
}