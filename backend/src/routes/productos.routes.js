import { getProductos, createProductos } from '../controllers/productos.controller.js'

import express from 'express'
const router = express.Router()

router.get('/', getProductos)
router.post('/', createProductos)

export default router
