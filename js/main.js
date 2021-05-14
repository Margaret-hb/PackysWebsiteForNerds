let carts = document.querySelectorAll('.add-cart');
// List of Products
let products = [
    {
        name: 'woc_kit',
        tag: 'woc_workessentialkit',
        price: 38.55,
        inCart: 0
    },
    {
        name: 'woc_styluspen',
        tag: 'woc_styluspen',
        price: 0.88,
        inCart: 0
    },
    {
        name: 'woc_journal',
        tag: 'woc_journal',
        price: 15.28,
        inCart: 0
    },
    {
        name: 'woc_tumbler',
        tag: 'woc_tumbler',
        price: 19.58,
        inCart: 0
    },
    {
        name: 'woc_ceramicmug',
        tag: 'woc_ceramicmug',
        price: 16.25,
        inCart: 0
    },
    {
        name: 'woc_totebag',
        tag: 'woc_totebag',
        price: 15.04,
        inCart: 0
    },
    {
        name: 'woc_womenstshirt',
        tag: 'woc_womenstshirt',
        price: 23.08,
        inCart: 0
    },
    {
        name: 'woc_womenspolo',
        tag: 'woc_womenspolo',
        price: 23.08,
        inCart: 0
    }
]
// Listening for Add To Cart Button Click
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        // Getting total cost of products in cart
        totalCost(products[i])
    })
}
// Saving Cart N
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    // console.log("The Product Clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    // Getting product from localstorage
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    // Something is already in localstorage/cart 
    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        // Increasing amount of product already in the localstorage/cart
        cartItems[product.tag].inCart += 1; // Product.tag is the same as the tag in the 'products' list
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);

    if(cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }


}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products-container");
    if(cartItems && productcontainer) {
        productContainer.innerHTML = '';
    }
}

onLoadCartNumbers();
displayCart();