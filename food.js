const foodContainer = document.getElementById('food-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
function displaySearchResults(data) {
    foodContainer.innerHTML = '';
        if (data.meals) {
        data.meals.forEach(meal => {
            const foodCard = document.createElement('div');
            foodCard.classList.add('food-card');
            foodCard.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h2>${meal.strMeal}</h2>
                <p>${meal.strInstructions}</p>
            `;
            foodContainer.appendChild(foodCard);
        });
    } else {
        foodContainer.innerHTML = '<p>Oops! We don\'t have that food.</p>';
    }
}