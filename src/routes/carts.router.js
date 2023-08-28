import { Router } from 'express';
import { __dirname } from '../utils.js';
import * as cartController from '../controllers/cartController.js';

const router = Router();

router.get('/', cartController.getAll);
router.get('/:cid', cartController.getById);
router.post('/', cartController.create); // Crea un carrito nuevo y lo devuelve
router.post('/:cid/products/:pid', cartController.update); // Actualiza la cantidad del producto :pid (req.body)
router.delete('/:cid', cartController.remove); // Elimina todos los productos del carrito
router.delete('/:cid/products/:pid', cartController.removeProduct);
router.put('/:cid', cartController.updateProducts);

export default router;