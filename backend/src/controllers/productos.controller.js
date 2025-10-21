import supabase from '../config/supabaseClient.js'

// Obtener todos los productos
export const getProductos = async (req, res) => {
  const { data, error } = await supabase
    .from('productos')
    .select('id_producto, nombre, descripcion, precio, categoria_id, disponible, imagen_url')

  if (error) {
    console.error('❌ Error al obtener productos:', error.message)
    return res.status(500).json({ error: error.message })
  }

  res.status(200).json(data)
}

// Obtener un producto por ID 
export const getProductoById = async (req, res) => {
  const { id } = req.params
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('id_producto', id)
    .single()

  if (error) {
    console.error('❌ Error al obtener producto:', error.message)
    return res.status(404).json({ error: 'Producto no encontrado' })
  }

  res.status(200).json(data)
}

// Crear un nuevo producto
export const createProducto = async (req, res) => {
  const { nombre, descripcion, precio, categoria_id, disponible, imagen_url } = req.body

  const { data, error } = await supabase
    .from('productos')
    .insert([
      { nombre, descripcion, precio, categoria_id, disponible, imagen_url }
    ])
    .select()

  if (error) {
    console.error('❌ Error al crear producto:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.status(201).json(data[0])
}

// Actualizar un producto existente
export const updateProducto = async (req, res) => {
  const { id } = req.params
  const { nombre, descripcion, precio, categoria_id, disponible, imagen_url } = req.body

  const { data, error } = await supabase
    .from('productos')
    .update({ nombre, descripcion, precio, categoria_id, disponible, imagen_url })
    .eq('id_producto', id)
    .select()

  if (error) {
    console.error('❌ Error al actualizar producto:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.status(200).json(data[0])
}

// Eliminar un producto
export const deleteProducto = async (req, res) => {
  const { id } = req.params

  const { error } = await supabase
    .from('productos')
    .delete()
    .eq('id_producto', id)

  if (error) {
    console.error('❌ Error al eliminar producto:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.status(204).send() // No content
}
