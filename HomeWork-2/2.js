"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const productsContainer = document.getElementById('products');
const productTemplate = document.getElementById('product-template');

function renderProducts() {
  initialData.forEach(productData => {
    const productElement = document.importNode(productTemplate.content, true).querySelector('.product');
    productElement.querySelector('.product-name').innerText = productData.product;

    const reviewsList = productElement.querySelector('.reviews');
    productData.reviews.forEach(review => {
      const reviewElement = document.createElement('li');
      reviewElement.innerText = review.text;
      reviewsList.appendChild(reviewElement);
    });

    const reviewForm = productElement.querySelector('.review-form');
    reviewForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const reviewInput = reviewForm.querySelector('input[type="text"]');
      const newReview = {
        id: Math.floor(Math.random() * 100000),
        text: reviewInput.value
      };

      productData.reviews.push(newReview);
      const newReviewElement = document.createElement('li');
      newReviewElement.innerText = newReview.text;
      reviewsList.appendChild(newReviewElement);

      reviewInput.value = '';
    });

    productsContainer.appendChild(productElement);
  });
}

renderProducts();


