// backend/src/controllers/productos.controller.js
export const getProductos = (req, res) => {
  res.json({ message: 'Obteniendo productos...' })
}

export const createProductos = (req, res) => {
  res.json({ message: 'Producto creado correctamente' })
}
