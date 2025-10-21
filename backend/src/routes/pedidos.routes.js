import express from 'express'
import { getPedidos, createPedido } from '../controllers/pedidos.controller.js'
const router = express.Router()

router.get('/', getPedidos)
router.post('/', createPedido)

export default router