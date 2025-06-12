import pool from '../../config.js'

// Get
export const getPostsModel = async () => {
  const sqlQuery = 'SELECT * FROM posts'
  const response = await pool.query(sqlQuery)
  console.log(response.rows)
  return response.rows
}

// Post
export const createPostModel = async ({ titulo, img, descripcion }) => {
  const sqlQuery = {
    text: 'INSERT INTO posts (titulo, img, descripcion) values ($1, $2, $3) RETURNING *',
    values: [titulo, img, descripcion]
  }
  const result = await pool.query(sqlQuery)
  console.log('Post agregado', result)
  return result.rows
}

// PUT
export const setPostModel = async (like, id) => {
  const sqlQuery = {
    text: 'UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *',
    values: [like, id]
  }
  const response = await pool.query(sqlQuery)
  return response.rows[0]
}

// Delete
export const deletePostModel = async (id) => {
  const sqlQuery = {
    text: 'DELETE FROM posts WHERE id= $1',
    values: [id]
  }
  const result = await pool.query(sqlQuery)
  return result.rowCount
}
