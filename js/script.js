// get Elements [<

let section1 = document.querySelector('#container1');

let section2 = document.querySelector('#container2');

// get Elements >]

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

// products array #_2 [<

const products2 = [
  {
    title: 'Adult Quantity Tee',
    price: '$26.00 – $29.00',
    img: './img/BlueSweatshirt.png',
    colors: ['000000', 'D7A983'],
  },
  {
    title: 'All-Over-Print Hoodie',
    price: '$26.00 – $29.00',
    img: './img/RedHoodie.png',
    colors: ['000000', 'D7A983'],
  },
  {
    title: 'AOP Cut & Sew Tee',
    price: '$26.00 – $29.00',
    img: './img/YellowPullover.png',
    colors: ['000000', 'D7A983'],
  },
  {
    title: 'Fine Jersey Tee',
    price: '$26.00 – $29.00',
    img: './img/PurpleJacket.png',
    colors: ['000000', 'D7A983'],
  },
];

// products array #_2 >]

// function for products array [<

function apendCard2(products2) {
  let card = document.createElement('div');
  let imgBox = document.createElement('div');
  let img = document.createElement('img');
  let txtContentBox = document.createElement('div');
  let name = document.createElement('h2');
  let price = document.createElement('span');
  let circlesdiv = document.createElement('div');
  let circle1 = document.createElement('div');
  let circle2 = document.createElement('div');

  section2.appendChild(card);

  card.appendChild(imgBox);

  imgBox.classList.add('img_box_borderRadius');

  card.classList.add('card_box');

  img.src = products2.img;

  imgBox.appendChild(img);

  card.appendChild(txtContentBox);

  txtContentBox.classList.add('card_box_span');

  txtContentBox.appendChild(name);

  name.classList.add('card_box_span_h2');

  name.textContent = products2.title;

  txtContentBox.appendChild(price);

  price.classList.add('card_box_span_spans');

  price.textContent = products2.price;

  card.appendChild(circlesdiv);

  circlesdiv.classList.add('circle_box');

  circlesdiv.appendChild(circle1);

  circle1.classList.add('sircle_1');
  circle1.style.backgroundColor = `#${products2.colors[0]}`;
  circlesdiv.appendChild(circle2);

  circle2.classList.add('sircle_2');
  circle2.style.backgroundColor = `#${products2.colors[1]}`;

  console.log(products2.colors[0]);
}

products2.forEach(apendCard2);

// function for products array >]
