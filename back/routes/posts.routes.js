import { Router } from 'express'
import { getAllPosts, createPost, updatePost, deletePost } from '../src/controllers/postsController.js'

const router = Router()

router.get('/posts', getAllPosts)
router.post('/posts', createPost)

// parte 2
router.put('/posts/like/:id', updatePost)
router.delete('/posts/:id', deletePost)

export default router
