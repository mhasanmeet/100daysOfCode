const getMealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');

getMealBtn.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(res => res.json())
  .then(res => {
    createMeal(res.meals[0])
  })
})



function createMeal(meal){
  const ingredients = [];
  for( let i=1; i <= 20; i++){
    if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		}
      else {
        break;
      }
  }

  mealContainer.innerHTML = `
    <div class = "row">
      <div class = "column five">
        <img src = "${meal.strMealThumb}" alt ="meal img"/>
      </div>
          <p><strong>Category:</stromg> ${meal.strCategory}</p>
          <p><strong>Area:</stromg> ${meal.strArea}</p>
          <p><strong>Tags:</stromg> ${meal.strTags.split(',').join(', ')}</p>
        
          <h4>Ingredients</h4>

          <ul>
              ${ingredients.map(ingredient => `
                <li>${ingredient}</li>
              `).join('')}
          </ul>
      <div class = "column seven">
        <h4>${meal.strMeal}</h4>
        <p>${meal.strInstructions}</p>
      </div>
    </div>
    <div class="row">
        <h5>Video Recipe</h5>
        <div class="VideoWrapper">
          <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"/>
    </div>
  `;
}