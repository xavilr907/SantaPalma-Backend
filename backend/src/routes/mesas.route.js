import express from 'express'
import { 
    getMesas, 
    getMesaById,
    createMesa,
    updateMesa,
    deleteMesa
} from '../controllers/mesas.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'
const router = express.Router()

router.get('/', getMesas)
router.get('/:id', getMesaById)
router.post('/', createMesa)
router.post('/:id', updateMesa)
router.post('/:id', deleteMesa)
router.post('/', authMiddleware, createMesa)
router.post('/:id', authMiddleware, updateMesa)
router.post('/:id', authMiddleware, deleteMesa)

export default router
