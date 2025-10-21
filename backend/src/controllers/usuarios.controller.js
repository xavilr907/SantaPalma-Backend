import supabase from '../config/supabaseClient.js'

// Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select(`
      id_usuario,
      nombre,
      correo,
      contraseña_hash,
      rol,
      fecha_registro
    `)

  if (error) {
    console.error('Error al obtener usuarios:', error.message)
    return res.status(500).json({ error: error.message })
  }

  res.status(200).json(data)
}

// Obtener un usuario por ID
export const getUsuarioById = async (req, res) => {
  const { id } = req.params

  const { data, error } = await supabase
    .from('usuarios')
    .select(`
      id_usuario,
      nombre,
      correo,
      contraseña_hash,
      rol,
      fecha_registro )
    `)
    .eq('id_usuario', id)
    .single()

  if (error) {
    console.error('Error al obtener usuario:', error.message)
    return res.status(404).json({ error: 'Usuario no encontrado' })
  }

  res.status(200).json(data)
}

// Crear un nuevo usuario
export const createUsuario = async (req, res) => {
  const { nombre, correo, constraseña_hash, rol, fecha_registro } = req.body

  const { data, error } = await supabase
    .from('usuarios')
    .insert([
      { nombre, correo, constraseña_hash, rol, fecha_registro }
    ])
    .select(`
      id_usuario,
      nombre,
      correo,
      contraseña_hash,
      rol,
      fecha_registro
    `)

  if (error) {
    console.error('Error al crear usuario:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.status(201).json(data[0])
}


// Actualizar un usuario existente
export const updateUsuario = async (req, res) => {
  const { id } = req.params
  const { nombre, correo, constraseña_hash, rol, fecha_registro } = req.body

  const { data, error } = await supabase
    .from('usuarios')
    .update({ nombre, correo, constraseña_hash, rol, fecha_registro })
    .eq('id_usuario', id)
    .select(`
      id_usuario,
      nombre,
      correo,
      contraseña_hash,
      rol,
      fecha_registro
    `)

  if (error) {
    console.error('Error al actualizar usuario:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.status(200).json(data[0])
}

// Eliminar usuario
export const deleteUsuario = async (req, res) => {
  const { id } = req.params

  const { error } = await supabase
    .from('usuarios')
    .delete()
    .eq('id_usuario', id)

  if (error) {
    console.error('Error al eliminar usuario:', error.message)
    return res.status(400).json({ error: error.message })
  }

  res.status(204).send()
}
