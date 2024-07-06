const meals = [
    {
      name: "Grilled Lemon Herb Chicken",
      imgUrl:"./assets/cooked-chicken-legs-with-herbs.jpg",
      ingredients: ["chicken breasts", "lemon juice", "olive oil", "garlic", "thyme", "rosemary", "salt", "black pepper"],
      instructions: "Marinate chicken breasts in lemon juice, olive oil, minced garlic, chopped thyme, chopped rosemary, salt, and black pepper. Grill until cooked through, about 6-8 minutes per side."
    },
    {
      name: "Vegetable Stir-Fry",
      imgUrl:"./assets/pexels-cottonbro-3298693.jpg",
      ingredients: ["mixed vegetables (bell peppers, broccoli, carrots, snap peas)", "tofu or chicken", "soy sauce", "ginger", "garlic", "sesame oil", "cornstarch", "rice"],
      instructions: "Stir-fry mixed vegetables and tofu or chicken in a wok with soy sauce, minced ginger, minced garlic, and sesame oil. Thicken sauce with cornstarch slurry. Serve over cooked rice."
    },
    {
      name: "Pasta Primavera",
      imgUrl:"./assets/pexels-laarkstudio-9893176.jpg",
      ingredients: ["pasta", "assorted vegetables (zucchini, bell peppers, cherry tomatoes)", "olive oil", "garlic", "Parmesan cheese", "basil", "salt", "black pepper"],
      instructions: "Cook pasta according to package instructions. Meanwhile, sauté assorted vegetables in olive oil with minced garlic. Toss cooked pasta with vegetables, grated Parmesan cheese, chopped basil, salt, and black pepper."
    },
    {
      name: "Quinoa Salad",
      imgUrl:"./assets/pexels-laarkstudio-9893176.jpg",
      ingredients: ["quinoa", "cucumber", "tomato", "red onion", "bell pepper", "avocado", "lemon juice", "olive oil", "parsley", "salt", "black pepper"],
      instructions: "Cook quinoa according to package instructions. Chop cucumber, tomato, red onion, bell pepper, and avocado. Mix cooked quinoa with chopped vegetables, lemon juice, olive oil, chopped parsley, salt, and black pepper."
    },
    {
      name: "Mushroom Risotto",
      imgUrl:"./assets/pexels-max-griss-16866522-6406460.jpg",
      ingredients: ["Arborio rice", "mushrooms", "vegetable broth", "white wine", "onion", "garlic", "Parmesan cheese", "butter", "thyme", "salt", "black pepper"],
      instructions: "Sauté chopped onion and minced garlic in butter. Add Arborio rice and cook until translucent. Deglaze with white wine, then add vegetable broth gradually while stirring constantly until absorbed. Stir in sliced mushrooms and chopped thyme. Finish with grated Parmesan cheese, salt, and black pepper."
    },
    {
      name: "Salmon with Asparagus",
      imgUrl:"./assets/pexels-marta-dzedyshko-1042863-15029064.jpg",
      ingredients: ["salmon fillets", "asparagus", "lemon", "olive oil", "garlic", "dill", "salt", "black pepper"],
      instructions: "Preheat oven to 400°F (200°C). Place salmon fillets on a baking sheet. Arrange asparagus around salmon. Drizzle with olive oil, minced garlic, and lemon juice. Season with chopped dill, salt, and black pepper. Bake for 12-15 minutes until salmon is cooked through."
    }
]

const random_Number =() =>{
    let RANDOM_NUM = Math.floor(Math.random() * meals.length);
    return RANDOM_NUM;
}

const MEALS_BUTTON = document.getElementById("random-meals-btn");
const MEAL_NAME = document.getElementById("meal-name");
const MEAL_IMG = document.getElementById("meal-img");
const MEAL_INGREDIENTS = document.getElementById("meal-ingredients");
const MEAL_INSTRUCTIONS = document.getElementById("meal-instructions");

MEALS_BUTTON.addEventListener("click",()=>{
    MEAL_NAME.innerText = meals[random_Number()].name;
    MEAL_IMG.src = meals[random_Number()].imgUrl;
    MEAL_INGREDIENTS.textContent = "";
    for(let i = 0;i<meals.length;i++){
        MEAL_INGREDIENTS.textContent += meals[random_Number()].ingredients[i];
    }
    MEAL_INSTRUCTIONS.textContent = meals[random_Number()].instructions;
})