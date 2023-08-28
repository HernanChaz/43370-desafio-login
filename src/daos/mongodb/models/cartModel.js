import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    products: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
});

export const CartModel = mongoose.model('carts', cartSchema);