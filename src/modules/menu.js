export const menu = () => {
    const cardsMenu = document.querySelector('.cards-menu');

    const changeTitle = (restaurant) => {
        const restaurantTitle = document.querySelector('.restaurant-title');
        const restaurantRating = document.querySelector('.rating');
        const restaurantPrice = document.querySelector('.price');
        const restaurantCategory = document.querySelector('.category');

        console.log(restaurant);

        restaurantTitle.textContent = restaurant.name;
        restaurantRating.textContent = restaurant.stars;
        restaurantPrice.textContent = `От ${restaurant.price} ₽`;
        restaurantCategory.textContent = restaurant.kitchen;
    };

    const renderItems = (data) => {
        data.forEach(({ description, id, image, name, price }) => {
            const card = document.createElement('div');

            card.classList.add('card');

            card.innerHTML = `
                <img src="${image}" alt="${name}" class="card-image"/>
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title card-title-reg">
                            ${name}
                        </h3>
                    </div>
                    <div class="card-info">
                        <div class="ingredients">
                            ${description}
                        </div>
                    </div>
                    <div class="card-buttons">
                        <button class="button button-primary button-add-cart">
                            <span class="button-card-text">В корзину</span>
                            <span class="button-cart-svg"></span>
                        </button>
                        <strong class="card-price-bold">${price} ₽</strong>
                    </div>
                </div>
            `;

            cardsMenu.append(card);
        });
    };

    if (localStorage.getItem('restaurant')) {
        const restaurant = JSON.parse(localStorage.getItem('restaurant'));

        changeTitle(restaurant);

        fetch(`./db/${restaurant.products}`)
            .then((response) => response.json())
            .then((data) => renderItems(data))
            .catch((error) => console.log(error));
    } else {
        window.location.href = '/';
    }
};
