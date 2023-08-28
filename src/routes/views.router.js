import { Router } from 'express';
const router = Router();

import { getAll } from '../controllers/productController.js';
import { login, register, errorLogin, errorRegister, profile } from "../controllers/views.controllers.js";

router.get('/realTimeProducts', (req, res) => {res.render('realTimeProducts')});
router.get('/chat', (req, res) => {res.render('chat')});
router.get('/products', getAll);

router.get('/', login);
router.get('/register', register);
router.get('/error-login', errorLogin);
router.get('/error-register', errorRegister);
router.get('/profile', profile);

export default router;