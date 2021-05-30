// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=8&tags=Burgers%2Csandwiches%2Cbreakfast%2Csalad%2Csoup%2Cdessert%2Cpasta%2Cpizza",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
// 		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// var unirest = require("unirest");
// var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
// req.query({
// 	"cuisine": "burgers"
// });
// req.headers({
// 	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 	"useQueryString": true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });

// var unirest = require("unirest");
// var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
// req.query({
// 	"cuisine": "sandwiches"
// });
// req.headers({
// 	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 	"useQueryString": true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });

// var unirest = require("unirest");
// var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
// req.query({
// 	"cuisine": "breakfast"
// });
// req.headers({
// 	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 	"useQueryString": true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });

// var unirest = require("unirest");
// var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
// req.query({
// 	"cuisine": "salad"
// });
// req.headers({
// 	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 	"useQueryString": true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });

// var unirest = require("unirest");
// var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
// req.query({
// 	"cuisine": "soup"
// });
// req.headers({
// 	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 	"useQueryString": true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });

// var unirest = require("unirest");
// var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
// req.query({
// 	"cuisine": "dessert"
// });
// req.headers({
// 	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 	"useQueryString": true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });

// var unirest = require("unirest");
// var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
// req.query({
// 	"cuisine": "pasta"
// });
// req.headers({
// 	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 	"useQueryString": true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });

// var unirest = require("unirest");
// var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
// req.query({
// 	"cuisine": "pizza"
// });
// req.headers({
// 	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 	"useQueryString": true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });



const apiKey = "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0"
const spoonacular = axios.create({
    baseURL: 'https://api.spoonacular.com/',
    timeout: 10000
})

exports.getRecipeById = async (id) => {
    const response = await spoonacular.get(`/recipes/${id}/information?apiKey=${apiKey}`)
    return {image: response.data.image, title: response.data.title}
}

exports.getRandomRecipes = async (intolerances) => {
    const url = `recipes/complexSearch?number=10&query=any&intolerances=${intolerances},&instructionsRequired=true&sort=random&apiKey=${apiKey}`
    const request = await spoonacular.get(url)
    return request.data.results;
}

exports.getRecipeInstructions = async (id) => {
    let ingredients = [];
    let equipment = [];
    let sections = [];
    const instructions = await spoonacular.get(`recipes/${id}/analyzedInstructions?apiKey=${apiKey}`)
    instructions.data.forEach(instruction => getSteps(instruction))

    async function getSteps(instruction){
        const steps = []
        instruction.steps.forEach(step => {
            steps.push({number: step.number, instruction: step.step})
            ingredients = ingredients.concat(step.ingredients)
            equipment = equipment.concat(step.equipment)
        })
        sections.push({name: instruction.name, steps: steps})
    }

    return {ingredients, equipment, sections}
}

exports.getJoke = async () => {
    const request = await spoonacular.get(`food/jokes/random?apiKey=${apiKey}`)
    return request.data.text
}

exports.getTrivia = async () => {
    const request = await spoonacular.get(`food/trivia/random?apiKey=${apiKey}`)
    return request.data.text
}

exports.searchRecipeVideos = async  (name) => {
    const request = await spoonacular.get(`food/videos/search?query=${name}&number=10&apiKey=${apiKey}`);
    return request.data.videos;
}

exports.searchRecipe = async (name, intolerances) => {
    const url = `recipes/search?number=10&query=${name}&intolerances=${intolerances},&instructionsRequired=true&apiKey=${apiKey}`
    const request = await spoonacular.get(url);
    return request.data.results;
}

exports.searchRecipeByIngredients = async (ingredients) => {
    const url = `recipes/findByIngredients?number=10&ingredients=${ingredients},&ranking=1&ignorePantry=true&instructionsRequired=true&apiKey=${apiKey}`
    const request = await spoonacular.get(url);
    return request.data;
}