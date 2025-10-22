import express from 'express'
import { 
    getPedidos, 
    getPedidoById,
    createPedido,
    updatePedido,
    deletePedido
} from '../controllers/pedidos.controller.js'
    import { authMiddleware } from '../middlewares/auth.middleware.js'
const router = express.Router()

router.get('/', getPedidos)
router.get('/:id', getPedidoById)
router.post('/', createPedido)
router.post('/:id', updatePedido)
router.put('/:id', authMiddleware, updatePedido)
router.delete('/:id', authMiddleware, deletePedido)

export default router





