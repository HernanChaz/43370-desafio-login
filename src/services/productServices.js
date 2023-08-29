import ProductDaoMongoDB from "../daos/mongodb/productDao.js";
const productDao = new ProductDaoMongoDB();

//import ProductDaoFS from '../daos/filesystem/productDao.js';
//const productDao = new ProductDaoFS();

export const getProductsServices = async (page, limit, query, queryValue, sort) => {   
    try {
        const response = await productDao.getProducts(page, limit, query, queryValue, sort);
        
        const result = {
            payload: response.docs,
            status: "success",
            totalPages: response.totalPages,
            prevPage: response.prevPage,
            nextPage: response.nextPage,
            page: response.page,
            hasPrevPage: response.hasPrevPage,
            hasNextPage: response.hasNextPage,
            prevLink: response.hasPrevPage
              ? `http://localhost:8080/api/products?page=${response.prevPage}`
              : null,
            nextLink: response.hasNextPage
              ? `http://localhost:8080/api/products?page=${response.nextPage}`
              : null,
          };
      
          return result;
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
        //console.log(item);
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