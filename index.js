import express  from 'express';
import userRoutes from './src/user/user.routes.js';
import  initconection  from './db/connection.js';
import messageRoutes from './src/user/message.routes.js';

const app = express();
const port = 3000
initconection()
app.use(express.json())
app.use(userRoutes)
app.use(messageRoutes)
// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

