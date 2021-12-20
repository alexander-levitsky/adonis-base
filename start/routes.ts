/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import RealtyObject from "App/Models/RealtyObject";

Route.get('/', async () => {
  return {hello: 'world'}
})


Route.get('/test', async () => {
  return RealtyObject.query().where('id', 47)
    .preload('realtyAdditional')
    .preload('realtyParking')
    .preload('realtyPayment')
    .preload('builders')
    .preload('contacts')
    .preload('realtyPavilions', pavilion=>
      pavilion.preload('sections', section=>
        section.preload('chess', chess=>
          chess.preload('cols').preload('rows').preload('cells')
        )
      )
    )
    .firstOrFail()
})


Route.get('/*', async () => {
  return {error: 'not found', code: 404}
})
