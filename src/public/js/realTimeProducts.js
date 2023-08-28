const products = document.querySelector("#productos");
const socket = io();

socket.emit('allProducts', "");

socket.on('allProducts', (prods)=>{
    if(prods) {
        let prodInfo = '';
        prods.forEach(product => {
            prodInfo += `${product.code} - ${product.title} || Stock: ${product.stock} || Precio: ${product.price}</br>`;
        })
        products.innerHTML = `${prodInfo}`;
    }
    
})