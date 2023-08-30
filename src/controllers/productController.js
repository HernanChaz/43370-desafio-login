import * as service from '../services/productServices.js';

export const getAll = async (req, res, next) => {
    try {
        const user = req.session.user;
        const { page } = req.query;
        const {
          payload: products,
          totalPages,
          prevPage,
          nextPage,
          page: currentPage,
          hasPrevPage,
          hasNextPage,
        } = await service.getProductsServices({ page, limit: 2 });
    
        const plainProducts = products.map((product) => product.toObject());
    
        res.render("products", {
          user,
          products: plainProducts,
          totalPages,
          currentPage,
          prevPage,
          nextPage,
          hasPrevPage,
          hasNextPage,
          prevLink: `/products?page=${prevPage}`,
          nextLink: `/products?page=${nextPage}`,
        });
    }
    catch (error) {
        next(error.message);
    }
}

export const getProds = async (req, res, next) => {
    try {
        const response = await service.getProductsServices();
        const nextLink = response.hasNextPage ? `http://localhost:8080/api/products/?page=${response.nextPage},limit=${limit}` : null;
        const prevLink = response.hasPrevPage ? `http://localhost:8080/api/products/?page=${response.prevPage},limit=${limit}` : null;
        return {
            status: 'success',
            payload: response.docs,
            totalPages: response.totalPages,
            prevPage: response.prevPage,
            nextPage: response.nextPage,
            hasPrevPage: response.hasPrevPage,
            hasNextPage: response.hasNextPage,
            prevLink,
            nextLink
        };
    }
    catch (error) {
        next(error.message);
    }
}

export const getById = async (req, res, next) => {
    try {
        const {pid} = req.params;
        const prod = await service.getProductByIdServices(pid);
        if(!prod) res.status(404).json({msg: 'Producto no encontrado'});
        else res.status(200).json(prod);
    }
    catch (error) {
        next(error.message);
    }
}

export const create = async (req, res, next) => {
    try {
        const newProd = await service.addProductServices(req.body);
        if(!newProd) res.status(404).json({msg: 'Error de validación'});
        else res.status(200).json(newProd);
    }
    catch (error) {
        next(error.message);
    }
}

export const update = async (req, res, next) => {
    try {
        const {pid} = req.params;
        const prodUpd = await service.updateProductServices(pid, req.body);
        res.json(prodUpd);
    }
    catch (error) {
        next(error.message);
    }
}

export const remove = async (req, res, next) => {
    try {
        const {pid} = req.params;
        const prodDel = await service.deleteProductServices(pid);
        res.json(prodDel);
    }
    catch (error) {
        next(error.message);
    }
}