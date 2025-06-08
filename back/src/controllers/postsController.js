import { getPostsModel, createPostModel } from '../models/postModel.js'

export const getAllPosts = async (req, res) => {
  try {
    const posts = await getPostsModel() // llamo al modelo (consulta sql)
    res.json({ posts })
  } catch (error) {
    res.json({ error: 'Error al procesar la solicitud' })
  }
}

export const createPost = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body
    const newPost = await createPostModel(titulo, img, descripcion)// llamo al modelo
    res.json({ post: newPost })
  } catch (error) {
    res.json({ error: 'Error al procesar la solicitud' })
    console.error('Error =>', error)
  }
}
