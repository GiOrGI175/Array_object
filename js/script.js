// products array #_1 [<

const products1 = [
  {
    title: 'Zone Sweatshirt',
    price: '$19.95 – $159.95',
    img: './img/GrayTShirt.png',
  },
  {
    title: 'Zoo Men’s t-shirt',
    price: '$14.95 – $119.95',
    img: './img/BlackJeans.png',
  },
  {
    title: 'Toddler T-shirt',
    price: '$26.00',
    img: './img/GreenJacket.png',
  },
  {
    title: 'Fine Jersey Tee',
    price: '$26.00',
    img: './img/WhiteSneakers.png',
  },
];

// products array #_1 >]

// products array #_2 [<

const products2 = [
  {
    title: 'Blue Sweatshirt',
    price: '$29.95 - $179.95',
    img: 'BlueSweatshirt.png',
    colors: ['blue', 'black'],
  },
  {
    title: 'Red Hoodie',
    price: '$24.95 - $149.95',
    img: 'RedHoodie.png',
    colors: ['red', 'green'],
  },
  {
    title: 'Yellow Pullover',
    price: '$19.95 - $129.95',
    img: 'YellowPullover.png',
    colors: ['yellow', 'orange'],
  },
  {
    title: 'Purple Jacket',
    price: '$39.95 - $199.95',
    img: 'PurpleJacket.png',
    colors: ['purple', 'pink'],
  },
];

// products array #_2 >]

// get Elements [<

let section1 = document.querySelector('#container1');

// get Elements >]

// function for products array [<

function apendCard(products1) {
  let card = document.createElement('div');
  let imgBox = document.createElement('div');
  let img = document.createElement('img');
  let txtContentBox = document.createElement('div');
  let name = document.createElement('h2');
  let price = document.createElement('span');

  section1.appendChild(card);

  card.appendChild(imgBox);

  imgBox.classList.add('img_box_borderRadius');

  card.classList.add('card_box');

  img.src = products1.img;

  imgBox.appendChild(img);

  card.appendChild(txtContentBox);

  txtContentBox.classList.add('card_box_span');

  txtContentBox.appendChild(name);

  name.classList.add('card_box_span_h2');

  name.textContent = products1.title;

  txtContentBox.appendChild(price);

  price.classList.add('card_box_span_spans');

  price.textContent = products1.price;
}

products1.forEach(apendCard);

// function for products array >]
