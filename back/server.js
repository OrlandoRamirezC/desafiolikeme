import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import postsRoutes from './routes/posts.routes.js'

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())

app.use(postsRoutes)

app.listen(PORT, console.log(`🔥 Server on 🔥 http://localhost:${PORT}`))
