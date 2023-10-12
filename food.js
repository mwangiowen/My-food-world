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
searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fetch data');
        }
    })
    .then(data => {
        displaySearchResults(data);
    })
    .catch(error => {
        console.error(error);
    });
});
function showCategory(categoryIndex, isSearchResult = false) {
    const category = categories[categoryIndex];
    const foodCard = document.createElement('div');
    if (isSearchResult) {
        foodCard.classList.add('search-food-card');
    } else {
        foodCard.classList.add('food-card');
    }
    foodCard.innerHTML = `
        <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
        <h2>${category.strCategory}</h2>
        <p>${category.strCategoryDescription}</p>
    `;
    foodContainer.innerHTML = '';
    foodContainer.appendChild(foodCard);
}