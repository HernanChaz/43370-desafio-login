import { CartModel } from "./models/cartModel.js";

export default class CartDaoMongoDB {
          
    async newCart(cart){
        try {
            const response = await CartModel.create(cart);
            return response;
        }
        catch (error){
            console.log(error);
        }
    }
        
    async getCarts(){
        try {
            const response = await CartModel.find();
            return response;
        }
        catch (error){
            console.log(error);
        }
    }
        
    async getCartById(cartId){
        try {
            const response = await CartModel.findById(cartId);
            return response;
        }
        catch (error){
            console.log(error);
        }
    }
    
    async updateCart(cid, pid, quantity){
        try {
            const response = await CartModel.findOneAndUpdate({_id : cid, "products.id" : pid}, { $set: { "products.$.quantity": quantity } }, {}, {new: true});
            return response;
        }
        catch (error){
            console.log(error);
        }
    }
    
    async updateProducts(cartId, products){
        try {
            const response = await CartModel.findOneAndUpdate({_id : cartId}, {$set: { "products": products }}, {new: true});
            return response;
        }
        catch (error){
            console.log(error);
        }
    }

    async deleteCart(cartId){
        try {
            const response = await CartModel.findOneAndUpdate({_id : cartId}, {$set: { "products": [] }}, {new: true});
            return response;
        }
        catch (error){
            console.log(error);
        }
    }

    async deleteCartProduct(cid, pid){
        try {
            const response = await CartModel.findOneAndUpdate({_id : cid, "products.id" : pid}, { $set: { "products.$.quantity": quantity } }, {}, {new: true});
            return response;
        }
        catch (error){
            console.log(error);
        }
    }

}