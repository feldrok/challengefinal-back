import categories from './categories.route.js'
import express from 'express'
import products from './products.route.js'
import routerCart from './cart.route.js'
import users from './users.route.js'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Server ready!')
})

router.use('/users', users)
router.use('/products', products)
router.use('/categories', categories)
router.use('/cart', routerCart)

export default router
