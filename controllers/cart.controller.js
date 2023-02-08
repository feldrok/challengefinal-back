import { Cart } from '../models/Cart.model.js'
import { User } from '../models/User.model.js'

const controller = {
    addProducts: async (req, res, next) => {
        try {
            let addProduct = await Cart.create(products)
            req.body.succes = true
            req.body.sc = 200
            req.body.data = 'Producto añadido correctamente'
            return addProduct
        } catch (err) {
            next(err)
        }
    },
    addOneProduct: async (req, res, next) => {
        const quantity = req.body
        try {
            let addOneProduct = await Cart.findOneAndUpdate(
                { quantityNumber: quantity.products.quantity },
                { $set: quantity }
            )
            return res.status(200).json({
                succes: true,
                message: addOneProduct,
            })
        } catch (error) {
            next(error)
        }
    },
}

export default controller