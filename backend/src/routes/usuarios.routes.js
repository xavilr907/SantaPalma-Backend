import express from 'express'
import {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  loginUsuario
} from '../controllers/usuarios.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/', getUsuarios)
router.get('/:id', getUsuarioById)
router.post('/', createUsuario)
router.post('/login', loginUsuario)
router.put('/:id', authMiddleware, updateUsuario)
router.delete('/:id', authMiddleware, deleteUsuario)

export default router
