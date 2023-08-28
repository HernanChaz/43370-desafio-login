import ProductDaoMongoDB from "../daos/mongodb/productDao.js";
const productDao = new ProductDaoMongoDB();

//import ProductDaoFS from '../daos/filesystem/productDao.js';
//const productDao = new ProductDaoFS();

export const getProductsServices = async (page, limit, query, queryValue, sort) => {   
    try {
        const response = await productDao.getProducts(page, limit, query, queryValue, sort);
        return response;
    }
    catch (err) {
        console.log(err);
    }
}

export const getProductByIdServices = async (id) => {   
    try {
        const item = await productDao.getProductById(id);
        if(!item) return false;
        else return item;
    }
    catch (err) {
        console.log(err);
    }
}

export const addProductServices = async (obj) => {   
    try {
        const newProd = await productDao.addProduct(obj);
        if(!newProd) return false;
        else return newProd;
    }
    catch (err) {
        console.log(err);
    }
}

export const updateProductServices = async (id, obj) => {   
    try {
        const item = await productDao.updateProduct(id, obj);
        console.log(item);
        return item;
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteProductServices = async (id) => {   
    try {
        const item = await productDao.deleteProduct(id);
        return item;
    }
    catch (err) {
        console.log(err);
    }
}

export const listTopNServices = async (listNumber) => {
    try {
        const products = await productDao.listTopN(listNumber);
        return products;
    }
    catch (err) {
        console.log(err);
    }
}