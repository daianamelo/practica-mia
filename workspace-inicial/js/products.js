// URL de la colección de productos en formato JSON
// URL de la colección de productos en formato JSON
let url = 'https://japceibal.github.io/emercado-api/cats_products/101.json';

fetch(url)
  .then(response => response.json())  // Convertir a JSON
  .then(data => mostrarData(data))    // Imprimir los datos en la consola
  .catch(error => console.log(error)); // Capturar errores

const mostrarData = (data) => {
  console.log(data);
  data.products.forEach(product => {
    // let titulo = document.getElementById('title');
    // titulo.innerHTML = `${product.name}`; // Corrected template literal syntax

   const productCard = document.createElement('div');
    productCard.classList.add('card'); // Add Bootstrap card class
    productCard.style.width = '18rem'; // Set card width if needed

    // Create card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
  });
};




