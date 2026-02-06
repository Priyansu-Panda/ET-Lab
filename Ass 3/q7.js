products = [
{ name: "Smartphone", price: 15000, rating: 4.5, category: ["Electronics", "Mobile", "Gadget"] },
{ name: "Laptop", price: 50000, rating: 4.7, category: ["Electronics", "Computer", "Gadget"] },
{ name: "Headphones", price: 2000, rating: 4.0, category: ["Electronics", "Accessories"] },
{ name: "Shoes", price: 3000, rating: 4.3, category: ["Fashion", "Footwear"] },
{ name: "Watch", price: 3500, rating: 4.2, category: ["Fashion", "Accessories"] },
{ name: "Washing Machine", price: 25000, rating: 4.6, category: ["Home Appliances", "Electronics"] },
{ name: "Refrigerator", price: 35000, rating: 4.4, category: ["Home Appliances", "Electronics"] },
{ name: "Table Lamp", price: 1000, rating: 3.8, category: ["Home Decor", "Furniture"] },
]

// 1.
products.forEach(el=>{
    console.log(`A ${el.name} is available for ${el.price} and has a rating of ${el.rating}`)
})

// 2. Extract product names

let prodName = []

products.forEach(element => {
    prodName.push(element.name)
}); 

console.log(prodName)

// 3. All Electronics
let elec = []
products.filter(el=>{
    // elec.push(el.category.includes("Electronics"))
    if(el.category.includes("Electronics")){
        elec.push(el.name)
    }
})

console.log(elec)

// 4. Highest Price
// let High = Math.max(...products.map(el=>el.price))
let High = products.reduce((acc,el)=>{
    if(el.price>acc){
        return el.price;
    }else{
        return acc;
    }
},0) 
console.log(High)

// 5. Average Rating 

let avgRating = products.reduce((acc,el)=>{
    return acc + el.rating
},0)/products.length 
console.log(avgRating);

// 6. Less than 10000
let price = products.filter(el=>el.price<10000)
console.log(price)  