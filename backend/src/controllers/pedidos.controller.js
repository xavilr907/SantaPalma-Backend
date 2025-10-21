import supabase from '../config/supabaseClient.js'

// Obtener todos los pedidos
export const getPedidos = async (req, res) => {
  const { data, error } = await supabase
    .from('pedidos')
    .select('id_pedido, estado, total, fecha_pedido')
  
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}

// Obtener un pedido por ID
export const getPedidoById = async (req, res) => {
  const { id } = req.params

  const { data, error } = await supabase
    .from('pedidos')
    .select(`
      id_pedido,
      estado,
      total,
      fecha_pedido )
    `)
    .eq('id_pedido', id)
    .single()

  if (error) {
    console.error('Error al obtener pedido:', error.message)
    return res.status(404).json({ error: 'Pedido no encontrado' })
  }

  res.status(200).json(data)
}

// Crear un nuevo pedido
export const createPedido = async (req, res) => {
  const { id_cliente, id_mesa } = req.body
  const { data, error } = await supabase
    .from('pedidos')
    .insert([{ id_cliente, id_mesa, estado: 'pendiente' }])
    .select()
  
  if (error) return res.status(400).json({ error: error.message })
  res.status(201).json(data)
}

// Actualizar un pedido existente
export const updatePedido = async (req, res) => {
  const { id } = req.params
  const { id_cliente, id_mesa, estado, total } = req.body

  const { data, error } = await supabase
    .from('pedidos')
    .update({ id_cliente, id_mesa, estado, total })
    .eq('id_pedido', id)
    .select(`
      id_pedido,
      id_cliente,
      id_mesa,
      estado,
      total,
      fecha_pedido
    `)

  if (error) {
    console.error('Error al actualizar pedido:', error.message)
    return res.status(400).json({ error: error.message })
  }

  // Si no se encontró el pedido
  if (!data || data.length === 0) {
    return res.status(404).json({ error: 'Pedido no encontrado' })
  }

  res.status(200).json(data[0])
}

// Eliminar pedido
export const deletePedido = async (req, res) => {
  const { id } = req.params
  
  const { error } = await supabase
    .from('pedidos')
    .delete()
    .eq('id_pedido', id)

  if (error) {
    console.error('Error al eliminar pedido:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.status(204).send()
}