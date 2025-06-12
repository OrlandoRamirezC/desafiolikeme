import { getPostsModel, createPostModel, setPostModel, deletePostModel } from '../models/postModel.js'

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
    const newPost = await createPostModel({ titulo, img, descripcion })// llamo al modelo
    res.json({ post: newPost })
  } catch (error) {
    res.json({ error: 'Error al procesar la solicitud' })
    console.error('Error =>', error)
  }
}

// PUT
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const { like } = req.body
    const post = await setPostModel(like, id)
    res.status(200).json({ post })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// delete

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await deletePostModel(id)
    if (post === 0) {
      return res.json({ error: 'post no encontrado' })
    }
    res.json('Post eliminado')
  } catch (error) {
    res.json({ error })
    console.error(error)
  }
}
