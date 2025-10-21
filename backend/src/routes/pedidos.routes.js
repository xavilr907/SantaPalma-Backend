import express from 'express'
import { 
    getPedidos, 
    getPedidoById,
    createPedido,
    updatePedido,
    deletePedido
} from '../controllers/pedidos.controller.js'
const router = express.Router()

router.get('/', getPedidos)
router.get('/:id', getPedidoById)
router.post('/', createPedido)
router.post('/:id', updatePedido)
router.post('/:id', deletePedido)

export default router





