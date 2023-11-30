const form = document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const reviewText = document.getElementById('reviewText').value;

    if (productName && reviewText) {
        // Сохранение отзыва в localstorage
        const review = {
            product: productName,
            review: reviewText
        };
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Очистка полей формы
        document.getElementById('productName').value = '';
        document.getElementById('reviewText').value = '';
    } else {
        document.getElementById('error').textContent = 'Пожалуйста, заполните все поля.';
    }
});

// Функция для отображения отзывов конкретного продукта
function toggleReviews(product) {
    const reviewsContainer = document.getElementById(product + 'Reviews');
    if (reviewsContainer.style.display === 'none') {
        reviewsContainer.style.display = 'block';
    } else {
        reviewsContainer.style.display = 'none';
    }
}

// Функция для удаления отзыва
function deleteReview(product, index) {
    let reviews = JSON.parse(localStorage.getItem('reviews'));
    reviews.splice(index, 1);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    showReviews();
}

// Функция для отображения отзывов на странице
function showReviews() {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    let productList = document.getElementById('productList');
    productList.innerHTML = ''; // очищаем содержимое списка перед обновлением

    reviews.forEach((review, index) => {
        if (!document.getElementById(review.product)) {
            productList.innerHTML += `
                <h3 class='reviews__tittle'>${review.product}</h3>
                <button class='reviews__btn' onclick="toggleReviews('${review.product}')">Показать отзывы</button>
                <div class='box' id="${review.product}Reviews" style="display: none;">
                <p class='box-text'>${review.review}</p>
            <button class='box-btn' onclick="deleteReview('${review.product}', ${index})">Удалить</button>
          </div>
        `;
        }
    });
}