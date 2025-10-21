import supabase from '../config/supabaseClient.js'

export const getPedidos = async (req, res) => {
  const { data, error } = await supabase
    .from('pedidos')
    .select('id_pedido, estado, total, fecha_pedido')
  
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}

export const createPedido = async (req, res) => {
  const { id_cliente, id_mesa } = req.body
  const { data, error } = await supabase
    .from('pedidos')
    .insert([{ id_cliente, id_mesa, estado: 'pendiente' }])
    .select()
  
  if (error) return res.status(400).json({ error: error.message })
  res.status(201).json(data)
}
