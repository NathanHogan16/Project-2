//  window.addEventListener("click", (event) =>{
//      const payload = {
//          search: event.target.id
//      }
//     // console.log(event.target.id)
//      fetch("http://localhost:3001/recipe/")
//     //  , {
//     //      method: "GET",
//     //      headers: {
//     //          'Content-Type': 'application/json',
            
//     //      },
//     //      body: event.target.id
//     //  })
// });



const express = require('express')
const router = express.Router()

router.get('/:id', middleware.verify, controller.getRecipeById)

router.get('/', [middleware.verify, middleware.checkLimit], controller.getRandomRecipes)

router.get('/favorites/backup', middleware.verify, controller.getFavorites)

router.post('/favorites/backup', middleware.verify, controller.updateFavorites)

router.get('/search/:query', middleware.verify, controller.searchRecipes)

router.get('/ingredients/:ingredients', middleware.verify, controller.getRecipesByIngredients)

module.exports = router