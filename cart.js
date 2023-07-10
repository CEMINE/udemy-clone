console.log("cart.js incarcat");


let products = [
    {
        id: 1,
        name: 'Python Bootcamp from Zero to Hero',
        image: 'https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg',
        price: 499.99
    },

    {
        id: 2,
        name: 'The Complete JavaScript Course',
        image: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        price:  499.99
    },
    {
        id: 3,
        name: 'C# Basics for Beginners',
        image: 'https://img-c.udemycdn.com/course/240x135/382002_5d4a.jpg',
        price: 379.99
    },
    {
        id: 4,
        name: 'The Complete Introduction to C++',
        image: 'https://img-c.udemycdn.com/course/240x135/3803956_0ded.jpg',
        price: 279.99
    }

];

let productsInCart = [];
let totalCart = 0;
let lastId;
let productsInCartId = [];
function addProduct (productId) {
    document.querySelector('.shopping-cart-content').insertAdjacentHTML(
      'afterbegin',
      `<div class="cart-row" style="width: 100%; height: 50px; padding-left:10px; padding-right: 10px; margin-top: 5px;">
        <img src=${products[productId].image.toString()} style="width: 70px; height:50px;">
        <h5 style="font-weight: bold; display:inline;">${products[productId].name.toString()}</h5> 
        <span style="display: inline; left:100% position: relative;">${products[productId].price.toString()  }</span>
        <input type="button" value="-" onclick="removeRow(this)" style="border-radius:30%; border: 0px transparent; background-color: red; color:white; width: 25px; height: 25px; font-size: 15px;" font-weight: bold;>
      </div>`      
    )
    totalCart += products.find(x => x.id = productId).price;
    document.getElementById("span-cart-total").innerHTML = "Total: " + totalCart + "RON" 
    console.log("Cart value: " + totalCart);
    lastId = productId;
    /*
    productsInCart += [
        {
            id: products.find(x => x.id = productId).id,
            name: products.find(x => x.id = productId).name.toString(),
            image: products.find(x => x.id = productId).image.toString(),
            price: products.find(x => x.id=productId).price
        }
    ]
    */
    //localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    productsInCartId.push(productId);
    localStorage.setItem("inCartProductsId", JSON.stringify(productsInCartId));

  }

  function removeRow (input) {
    input.parentNode.remove()
    totalCart -= products.find(x => x.id = lastId).price;
    document.getElementById("span-cart-total").innerHTML = "Total: " + totalCart + "RON" 
    console.log("Cart value: " + totalCart);
  }

