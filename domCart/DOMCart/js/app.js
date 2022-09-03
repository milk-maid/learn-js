// let element;

// element = document;

// let heading = document.getElementById('heading');
// heading.style.background = '#f93';
// heading.style.color = '#a2b3c5';
// heading.textContent = 'YOUR BEST CHOICE';






// console.log(element);

let heading = document.getElementById('heading');

console.log(heading);


heading.style.background = '#333';
heading.style.color = "#fff";
heading.style.padding = '20px';
heading.style.marginTop = '50px';
heading.style.innerText = 'Trial';
heading.textContent = 'Trial';
heading.innerText = "Don't Stop Grinding";



{/* <h1 id="heading" class="heading" style="background: rgb(51, 51, 51); color: rgb(255, 255, 255); padding: 20px; margin-top: 50px;">Don't Stop Grinding</h1> */}

const tagLine = document.querySelector('.tagline');

const newText = tagLine.textContent.replace('$15', '$123');

tagLine.textContent = newText;

console.log(tagLine);

// let images = document.getElementsByTagName('img');
// console.log(images[0].id);

// imagesArr = Array.from(images)

// console.log(imagesArr);

// imagesArr.forEach(function(assign) {
//     console.log(assign);
// });

// for (let i = 0; i < imagesArr.length; i++) {
    // console.log(imagesArr[i]);
// }

const card = document.querySelectorAll(`.card .price`);

console.log(card);

card.forEach(function(price, index) {
    // price.innerText = '$455'
    
    price.style.background = 'red';
    // console.log(`${index} : ${price}`);
});

// console.log(card);

const addToCartBtns = document.querySelectorAll('.add-to-cart');

addToCartBtns.forEach(function(addToCart) {
    addToCart.innerText = 'like it'
})

console.log(addToCartBtns);

const cartBtn = document.querySelector('.add-to-cart');

let element;

element = cartBtn.parentElement;

console.log(element);