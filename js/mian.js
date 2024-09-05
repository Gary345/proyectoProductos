let divData = document.getElementById("divData");

//let cardTemplate = document.getElementById("card-template").content;


function getData() {
    const promesa = fetch ("https://freetestapi.com/api/v1/products",{metod:"GET"});
    promesa.then((response) =>{
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);

            }).catch((err)=>console.log("Existió un problema con la solicitud",err));})
            .catch((err)=>console.log("Existió un problema con la solicitud",err));
    
    
}//getData

function createCards(products) {
    console.log(products.length);
    //crear una crad por cada producto con sus datos esenciales
    //de preferencia foreach: name,description, image, price
   products.forEach(element=> {
    let card =`
                <div class="card col-" style="width: 300px; margin-right:30px; margin-bottom:20px;" >
                <img src="${element.image}" class="card-img-top" alt="..." id="imagen">
                <div class="card-body">
                  <h5 class="card-title" id="name">${element.name}</h5>
                  <p class="card-text" id="description">${element.description}</p>
                </div>
                <ul class="list-group list-group-flush" style="list-style: none;">
                  <li class="item1" id="precio" >$ Precio: ${element.price}</li>
                  <li class="item2">Marca: ${element.brand}</li>
                </ul>
              </div>
   `
   divData.insertAdjacentHTML("beforeend",card);
    
   });
   
    
    
}// createCards

getData()
