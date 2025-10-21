import express from 'express'
import { 
    getMesas, 
    getMesaById,
    createMesa,
    updateMesa,
    deleteMesa
} from '../controllers/mesas.controller.js'
const router = express.Router()

router.get('/', getMesas)
router.get('/:id', getMesaById)
router.post('/', createMesa)
router.post('/:id', updateMesa)
router.post('/:id', deleteMesa)

export default router
