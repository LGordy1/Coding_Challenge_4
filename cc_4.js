const products = [
 {sku: '2345', name: "Supercharger", category: "Forced induction", price: 2000, inventory: 5},
 {sku: '3456', name: "Headers", category: "Exhaust", price: 799.99, inventory: 10},
 {sku: '4567', name: "Nitrous System", category: "Power Adder", price: 899.99, inventory: 15},
 {sku: '5678', name: "Rear Drag Brakes", category: "Brakes", price: 999.99, inventory: 20},
];

for (const product of products) {
    let discount = 0;

    switch(product.category){
        case 'Forced induction':
            discount = 0.1
            break;
        case "Exhaust":
            discount = 0.3
            break;
        case 'Power Adder':
            discount = 0.4
            break;
        case 'Brakes':
            discount = 0.2
            break;
        default:
            discount = 0;
     }
    product.discount = discount;
    product.finalPrice = product.price - (product.price * discount);
}

// Step 4: Variable customerType and if...else if chain to apply additional discounts

function applyCustomerDiscount(price, customerType) {
    let additionalDiscount = 0;

    if(customerType === "student") {
        additionalDiscount = 0.05; // 5% additional discount for students
    } else if(customerType === "senior") {
        additionalDiscount = 0.07; // 7% additional discount for seniors
    } else {   
        additionalDiscount = 0; // No additional discount
    } return price - (price * additionalDiscount);
}

// Step 5: Use for or while loops to simulate checkout process for 3 customers

console.log("=== Checkout Simulation ===\n");

let customerTypes = ["student", "senior", "regular"];
for(let i = 0; i < customerTypes.length; i++) {
    let totalCost = 0;
    let type = customerTypes[i];

    for(const product of products) {
        if(product.inventory > 0) {
            totalCost += applyCustomerDiscount(product.finalPrice, type);
            product.inventory--;
        }
    }
    console.log(`Customer ${i + 1} (${type}) - Total Cost: $${totalCost.toFixed(2)}`);

    console.log("\nRemaining Inventory:");
    for (const product of products) {
        console.log(`${product.name}: ${product.inventory} `);
    }
}

// Step 6: Log each key/value pair for a single product after discounts are applied

console.log("\n=== Single Product Details ===");
let product = products[1];
for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}

// Step 7: Use object.entries() and destructuring to log all products after inventory is updated.

console.log("\n=== All Product Info ===");
for (const product of products) {
    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
    console.log("---");
}