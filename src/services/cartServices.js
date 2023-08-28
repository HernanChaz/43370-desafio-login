import CartDaoMongoDB from "../daos/mongodb/cartDao.js";
const cartDao = new CartDaoMongoDB();

//import CartDaoFS from '../daos/filesystem/cartDao.js';
//const cartDao = new CartDaoFS();

export const getCartsServices = async () => {   
    try {
        const response = await cartDao.getCarts();
        return response;
    }
    catch (err) {
        console.log(err);
    }
}

export const getCartByIdServices = async (id) => {   
    try {
        const item = await cartDao.getCartById(id);
        if(!item) return false;
        else return item;
    }
    catch (err) {
        console.log(err);
    }
}

export const newCartServices = async (obj) => {   
    try {
        const newCart = await cartDao.newCart(obj);
        if(!newCart) return false;
        else return newCart;
    }
    catch (err) {
        console.log(err);
    }
}

export const updateCartServices = async (cid, pid, quantity) => {   
    try {
        const item = await cartDao.updateCart(cid, pid, quantity);
        return item;
    }
    catch (err) {
        console.log(err);
    }
}

export const updateProducts = async (cartId, products) => {   
    try {
        const item = await cartDao.updateProducts(cartId, products);
        return item;
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteCartServices = async (id) => {   
    try {
        const item = await cartDao.deleteCart(id);
        return item;
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteCartProductServices = async (cid, pid) => {   
    try {
        const item = await cartDao.deleteCartProduct(cid, pid);
        return item;
    }
    catch (err) {
        console.log(err);
    }
}
