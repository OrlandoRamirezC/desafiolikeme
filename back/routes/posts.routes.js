import { Router } from 'express'
import { getAllPosts, createPost } from '../src/controllers/postsController.js'

const router = Router()

router.get('/posts', getAllPosts)
router.post('/posts', createPost)

export default router
