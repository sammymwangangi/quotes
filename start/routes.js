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

// Route.on('/').render('welcome')

Route.get('/','QuoteController.index').as('index')
Route.get('/register','AuthController.registrationView').as('register.create')
Route.post('/register-store','AuthController.postRegister').as('register.store').validator('Register')
Route.get('/login','AuthController.loginView').as('login.create')
Route.post('/login-store','AuthController.postLogin').as('login.store')
Route.get('/view-quote/:id','QuoteController.show').as('view.quote')

Route.group(() => {
    Route.get('/create-quote','QuoteController.create').as('create.quote')
    Route.post('/store-quote','QuoteController.store').as('store.quote')
    Route.get('/edit-quote/:id','QuoteController.edit').as('edit.quote')
    Route.post('/update-quote/:id','QuoteController.update').as('update.quote')
    Route.get('/delete-quote/:id','QuoteController.destroy').as('delete.quote')
    Route.post('/logout','AuthController.logout').as('logout')
}).middleware(['auth'])
