'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')

Route.on('/register').render('auth.register')
Route.post('/register', 'UserController.create').validator('CreateUser')
Route.on('/login').render('auth.login')
Route.post('/login', 'UserController.login').validator('LoginUser')
Route.get('/logout', 'UserController.logout')

Route.on('/perks/favourites').render('perks.favourites')
Route.on('/perks/activated').render('perks.activated')

Route.get('/perks', 'PerkController.index')
Route.get('/perks/create', 'PerkController.create')
Route.post('/perks', 'PerkController.createSave')
Route.get('/perks/edit/:uid', 'PerkController.edit')
Route.put('/perks/:uid', 'PerkController.editSave')
Route.delete('/perks/:uid', 'PerkController.delete')
Route.get('/perks/:uid', 'PerkController.details') //DEVNOTE: keep bottom of route deinitions otherwise router will intercept and assign wrong controller

/*Route.get('/jobs', 'JobController.index')
Route.get('/jobs/create', 'JobController.userIndex')
Route.post('/jobs/create', 'JobController.create').validator('CreateJob')
Route.get('/jobs/edit/:id', 'JobController.edit')
Route.post('/jobs/save/:id', 'JobController.createSave').validator('CreateJob')
Route.get('/jobs/delete/:id', 'JobController.delete')*/

/*Route.post('/jobs/create', 'JobController.create').validator('CreateJob')
Route.group( () => {
  Route.get('edit/:id', 'JobController.edit')
  Route.post('save/:id', 'JobController.createSave').validator('CreateJob')
  Route.get('delete/:id', 'JobController.delete')
}).prefix('/jobs/')
}).prefix('/jobs/').auth() // DEVNOTE: you can chain and add middleware. in this instance calling auth will restrict access to these routes*/

// Route.get('/test/:uid', ({params}) => `This is id ${params.uid}`)
