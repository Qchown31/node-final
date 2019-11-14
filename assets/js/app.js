fetch("https://the-cocktail-db.p.rapidapi.com/random.php?", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "639dc94b9dmsh45e89f5e57c36ecp198b48jsnaf54953104a9"
	}
})
.then(x => x.json())
.then(x => {

  // const processed = x.drinks
  //   .filter(x => x.drinkName === 'vodka')


  console.log(x.drinks)
x.drinks.forEach(writeToPage);

random.addEventListener('click', function(){
  window.location.reload();
})

// vodka.addEventListener('click', function(){
//   processed

// })

})
.catch(err => {
	console.log(err);
});

const random = document.querySelector('#random')
const contain = document.querySelector('#container')
// const vodka = document.querySelector('#vodka')



function writeToPage(text) {
  // *** created card *****
  const el = document.createElement('div')
      el.className = 'card'
      contain.appendChild(el)

// *** drink name ***
  const title = document.createElement('h1')
      title.className = 'title'
      title.textContent = text.strDrink
      el.appendChild(title)

  const category = document.createElement('p')
      category.className = 'info'
      category.textContent = 'Category: ' + text.strCategory
      el.appendChild(category)

  const typeOfDrink = document.createElement('p')
      typeOfDrink.className = 'info'
      typeOfDrink.textContent = 'Type of drink: ' + text.strAlcoholic
      el.appendChild(typeOfDrink)

  const typeOfGlass = document.createElement('p')
      typeOfGlass.className = 'info'
      typeOfGlass.textContent = 'Type of glass to use: ' + text.strGlass
      el.appendChild(typeOfGlass)

    const ingredientsList = document.createElement('ul')
      ingredientsList.className = 'listHead'
      el.appendChild(ingredientsList)
      ingredientsList.textContent = 'Ingredients ↓'

      const ingredients1 = document.createElement('li')
        ingredients1.className = 'list'
        ingredientsList.appendChild(ingredients1)
        ingredients1.textContent = text.strMeasure1 +' ' + text.strIngredient1 

      const ingredients2 = document.createElement('li')
      ingredients2.className = 'list'
      ingredientsList.appendChild(ingredients2)

      if (text.strMeasure2 === null && text.strIngredient2 === null){
        ingredients2.textContent = " "
      } else if (text.strMeasure2 === null) {
        ingredients2.textContent = text.ingredients2
      } else {
      ingredients2.textContent = text.strMeasure2 +' ' + text.strIngredient2
      }

      const ingredients3 = document.createElement('li')
      ingredients3.className = 'list'
      ingredientsList.appendChild(ingredients3)

      if (text.strMeasure3 === null && text.strIngredient3 === null){
        ingredients3.textContent = " "
      } else if (text.strMeasure3 === null) {
        ingredients3.textContent = text.ingredients3
      } else {
      ingredients3.textContent = text.strMeasure3 +' ' + text.strIngredient3 
      }
      
      const ingredients4 = document.createElement('li')
      ingredients4.className = 'list'
      ingredientsList.appendChild(ingredients4)

      if (text.strMeasure4 === null && text.strIngredient4 === null){
        ingredients4.textContent = " "
      } else if (text.strMeasure4 === null) {
        ingredients4.textContent = text.ingredients4
      } else {
      ingredients4.textContent = text.strMeasure4 +' ' + text.strIngredient4
      }
     
      const ingredients5 = document.createElement('li')
      ingredients5.className = 'list'
      ingredientsList.appendChild(ingredients5)


      if (text.strMeasure5 === null && text.strIngredient5 === null){
        ingredients5.textContent = " "
      } else if (text.strMeasure5 === null) {
        ingredients5.textContent = text.ingredients5
      } else {
      ingredients5.textContent = text.strMeasure5 +' ' + text.strIngredient5 
      }

      const ingredients6 = document.createElement('li')
      ingredients6.className = 'list'
      ingredientsList.appendChild(ingredients6)

      if (text.strMeasure6 === null && text.strIngredient6 === null){
        ingredients6.textContent = " "
      } else if (text.strMeasure6 === null) {
        ingredients6.textContent = text.ingredients6
      } else {
      ingredients6.textContent = text.strMeasure6 +' ' + text.strIngredient6 
      }

      const ingredients7 = document.createElement('li')
      ingredients7.className = 'list'
      ingredientsList.appendChild(ingredients7)

      if (text.strMeasure7 === null && text.strIngredient7 === null){
        ingredients7.textContent = " "
      } else if (text.strMeasure7 === null) {
        ingredients7.textContent = text.ingredients7
      } else {
      ingredients7.textContent = text.strMeasure7 +' ' + text.strIngredient7 
      }

      const ingredients8 = document.createElement('li')
      ingredients8.className = 'list'
      ingredientsList.appendChild(ingredients8)

      if (text.strMeasure8 === null && text.strIngredient8 === null){
        ingredients8.textContent = " "
      } else if (text.strMeasure8 === null) {
        ingredients8.textContent = text.ingredients8
      } else {
      ingredients8.textContent = text.strMeasure8 +' ' + text.strIngredient8 
      }

      const ingredients9 = document.createElement('li')
      ingredients9.className = 'list'
      ingredientsList.appendChild(ingredients9)

      if (text.strMeasure9 === null && text.strIngredient9 === null){
        ingredients9.textContent = " "
      } else if (text.strMeasure9 === null) {
        ingredients9.textContent = text.ingredients9
      } else {
      ingredients9.textContent = text.strMeasure9 +' ' + text.strIngredient9 
      }

      const ingredients10 = document.createElement('li')
      ingredients10.className = 'list'
      ingredientsList.appendChild(ingredients10)

      if (text.strMeasure10 === null && text.strIngredient10 === null){
        ingredients10.textContent = " "
      } else if (text.strMeasure10 === null) {
        ingredients10.textContent = text.ingredients10
      } else {
      ingredients10.textContent = text.strMeasure10 +' ' + text.strIngredient10 
      }

      const ingredients11 = document.createElement('li')
      ingredients11.className = 'list'
      ingredientsList.appendChild(ingredients11)

      if (text.strMeasure11 === null && text.strIngredient11 === null){
        ingredients11.textContent = " "
      } else if (text.strMeasure11 === null) {
        ingredients11.textContent = text.ingredients11
      } else {
      ingredients11.textContent = text.strMeasure11 +' ' + text.strIngredient11 
      }

      const ingredients12 = document.createElement('li')
      ingredients12.className = 'list'
      ingredientsList.appendChild(ingredients12)

      if (text.strMeasure12 === null && text.strIngredient12 === null){
        ingredients12.textContent = " "
      } else if (text.strMeasure12 === null) {
        ingredients12.textContent = text.ingredients12
      } else {
      ingredients12.textContent = text.strMeasure12 +' ' + text.strIngredient12 
      }

      const ingredients13 = document.createElement('li')
      ingredients13.className = 'list'
      ingredientsList.appendChild(ingredients13)

      if (text.strMeasure13 === null && text.strIngredient13 === null){
        ingredients13.textContent = " "
      } else if (text.strMeasure13 === null) {
        ingredients13.textContent = text.ingredients13
      } else {
      ingredients13.textContent = text.strMeasure13 +' ' + text.strIngredient13 
      }

      const ingredients14 = document.createElement('li')
      ingredients14.className = 'list'
      ingredientsList.appendChild(ingredients14)

      if (text.strMeasure14 === null && text.strIngredient10 === null){
        ingredients14.textContent = " "
      } else if (text.strMeasure14 === null) {
        ingredients14.textContent = text.ingredients14
      } else {
      ingredients14.textContent = text.strMeasure14 +' ' + text.strIngredient14
      }

      const ingredients15 = document.createElement('li')
      ingredients15.className = 'list'
      ingredientsList.appendChild(ingredients15)

      if (text.strMeasure15 === null && text.strIngredient15 === null){
        ingredients15.textContent = " "
      } else if (text.strMeasure15 === null) {
        ingredients15.textContent = text.ingredients15
      } else {
      ingredients15.textContent = text.strMeasure15 +' ' + text.strIngredient15 
      }
      const instructions = document.createElement('p')
      instructions.className = 'instructions'
      el.appendChild(instructions)
      instructions.textContent = text.strInstructions

      
      

  const img = document.createElement('div')
  img.className = 'image'
    img.style=  `
    background-image: url(${text.strDrinkThumb});
    
    `
   el.appendChild(img)


  
  
}