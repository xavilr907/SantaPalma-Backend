import supabase from '../config/supabaseClient.js'

// Obtener todos los mesas
export const getMesas = async (req, res) => {
  const { data, error } = await supabase
    .from('mesas')
    .select(`
      id_mesa,
      codigo_qr,
      estado,
      ubicacion
    `)

  if (error) {
    console.error('Error al obtener mesas:', error.message)
    return res.status(500).json({ error: error.message })
  }

  res.status(200).json(data)
}

// Obtener un mesa por ID
export const getMesaById = async (req, res) => {
  const { id } = req.params

  const { data, error } = await supabase
    .from('mesas')
    .select(`
      id_mesa,
      codigo_qr,
      estado,
      ubicacion )
    `)
    .eq('id_mesa', id)
    .single()

  if (error) {
    console.error('Error al obtener mesa:', error.message)
    return res.status(404).json({ error: 'Mesa no encontrada' })
  }

  res.status(200).json(data)
}

// Crear una nueva mesa
export const createMesa = async (req, res) => {
  const { codigo_qr, estado, ubicacion } = req.body

  const { data, error } = await supabase
    .from('mesas')
    .insert([
      { codigo_qr, estado, ubicacion }
    ])
    .select(`
      id_mesa,
      codigo_qr,
      estado,
      ubicacion
      
    `)

  if (error) {
    console.error('Error al crear mesa:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.status(201).json(data[0])
}


// Actualizar una mesa existente
export const updateMesa = async (req, res) => {
  const { id } = req.params
  const { codigo_qr, estado, ubicacion } = req.body

  const { data, error } = await supabase
    .from('mesas')
    .update({ codigo_qr, estado, ubicacion })
    .eq('id_mesa', id)
    .select(`
      id_mesa,
      codigo_qr,
      estado,
      ubicacion
    `)

  if (error) {
    console.error('Error al actualizar mesa:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.status(200).json(data[0])
}

// Eliminar mesa
export const deleteMesa = async (req, res) => {
  const { id } = req.params

  const { error } = await supabase
    .from('mesas')
    .delete()
    .eq('id_mesa', id)

  if (error) {
    console.error('Error al eliminar mesa:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.status(204).send()
}
