// import axios from "axios";
//const axios = require("axios");
// let data = axios.get('https://fakestoreapi.com/products')
// console.log(data);
console.log(axios);
async function fetchData(){
    try{
        let res = await axios.get('https://fakestoreapi.com/products')
        // console.log(res.data);
        return res.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}

// let datas = fetchData();
// console.log(datas);
// console.log(fetchData());

// console.log(typeof fetchData());


function renderCard(item){
    // Create column wrapper
    let col = document.createElement('div');
    col.classList.add('col-md-4', 'col-sm-6', 'col-12');

    // Create card
    let card = document.createElement('div');
    card.classList.add('card', 'h-100'); // h-100 makes all cards in the row same height
    // card.style.width = "18rem"; // Removed fixed width to let it fit the column

    card.innerHTML = `
        <img src="${item.image}" class="card-img-top cardImg" alt="${item.title}" style="height: 200px; object-fit: contain; padding: 10px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title cardTitle">${item.title}</h5>
            <p class="card-text cardText text-truncate">${item.description}</p>
            <a href="#" class="btn btn-primary cardBtn mt-auto">Buy Now</a>
          </div>
    `
    col.appendChild(card);
    cards.appendChild(col);
}

fetchData().then((data)=>{
    // console.log(data);
    data.forEach((item)=>{
        // console.log(item);
        renderCard(item);
    })
}).catch((error)=>{
    console.log(error);
})


let cards = document.querySelector('.cards');
