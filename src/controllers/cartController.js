import * as service from '../services/cartServices.js';
import * as prodService from '../services/productServices.js';

export const getAll = async (req, res, next) => {
    try {
        const response = await service.getCartsServices();
        res.status(200).json(response);
    }
    catch (error) {
        next(error.message);
    }
}

export const getById = async (req, res, next) => {
    try {
        const {cid} = req.params;
        const prod = await service.getCartByIdServices(cid);
        if(!prod) res.status(404).json({msg: 'Carrito no encontrado'});
        else res.status(200).json(prod);
    }
    catch (error) {
        next(error.message);
    }
}

export const create = async (req, res, next) => {
    try {
        const newCart = await service.newCartServices( { products : [] } ) ;
        if(!newCart) res.status(404).json({msg: 'Error de validación'});
        else res.status(200).json(newCart);
    }
    catch (error) {
        next(error.message);
    }
}

export const update = async (req, res, next) => {
    try {
        const {cid} = req.params;
        const {pid} = req.params;
        const obj = req.body;
        const response = await service.updateCartServices(cid, pid, obj.quantity);
        res.status(200).json(response);
    }
    catch (error) {
        next(error.message);
    }
}

//Recibe el array entero de productos para el carrito
export const updateProducts = async (req, res, next) => {
    try {
        const {cid} = req.params;
        const products = req.body;
        await service.updateProducts(cid, products);
    }
    catch (error) {
        next(error.message);
    }
}


export const remove = async (req, res, next) => {
    try {
        const {cid} = req.params;
        const cartDel = await service.deleteCartServices(cid);
        res.json(cartDel);
    }
    catch (error) {
        next(error.message);
    }
}

export const removeProduct = async (req, res, next) => {
    try {
        const {cid} = req.params;
        const {pid} = req.params;
        const cartDel = await service.deleteCartProductServices(cid, pid);
        res.json(cartDel);
    }
    catch (error) {
        next(error.message);
    }
}