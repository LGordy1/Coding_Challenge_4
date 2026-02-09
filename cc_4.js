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
            console.log("You Get Nothing")



    }
}
