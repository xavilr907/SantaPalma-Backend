import express from 'express'
import cors from 'cors'
import pedidosRoutes from './routes/pedidos.routes.js'
import productosRoutes from './routes/productos.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/pedidos', pedidosRoutes)
app.use('/api/productos', productosRoutes)
app.use('/api/usuarios', usuariosRoutes )

app.listen(process.env.PORT || 4000, () => {
  console.log(`🚀 Servidor corriendo en puerto ${process.env.PORT || 4000}`)
})
