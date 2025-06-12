import pg from 'pg'
import 'dotenv/config' // variables de entorno

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env

// nos permite soportar multiconexiones y mejor rendimiento de consultas
const pool = new pg.Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  allowExitOnIdle: true // indica a postgre que cierre conexión en cada consulta
})

console.log(DB_HOST)

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('Error conneting to DB', err)
  } else {
    console.log('🔋 Db-Connected', res.rows[0])
  }
})

export default pool
