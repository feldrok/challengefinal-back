import { Cart } from '../models/Cart.model.js'
import { User } from '../models/User.model.js'

const controller = {
    createCart: async (req, res, next) => {
        try {
            let addProducts = await Cart.create(req.body)
            console.log('xd')
            return addProducts
        } catch (err) {
            console.log('noup')
            next(err)
        }
    },
    addOneProduct: async (req, res, next) => {
        const user = req.body
        try {
            let addOneProduct = await Cart.findOneAndUpdate(user.products, {
                $set: user.products,
            })
            console.log(addOneProduct)
            return res.status(200).json({
                succes: true,
                message: addOneProduct,
            })
        } catch (error) {
            next(error)
        }
    },
    deleteOneProduct: async (req, res, next) => {
        try {
            const { id } = req.params
            await Cart.findByIdAndDelete(id)
            res.status(200).json({
                success: true,
                message: 'Producto eliminado correctamente',
            })
        } catch (error) {
            next(error)
        }
    },
    emptyCart: async (req, res, next) => {
        try {
            await Cart.deleteMany(req.body.products)
            res.status(200).json({
                success: true,
                message: 'El carrito está vacío',
            })
        } catch (error) {
            next(error)
        }
    },
}

export default controller
