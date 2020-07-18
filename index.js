import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/routes.js';
import skillsRoutes from './routes/skillsRouter.js';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

//Vinculando o React ao App
app.use(express.static(path.join(__dirname, 'client/build')));

//Rota Raiz
app.get('/api/', (_, response) => {
  response.send({
    message:
      'Welcome to the Talent Registration API. Access /registration and follow the guidelines',
  });
});

//Rotas Principais do App
app.use('/api/registration', routes);
app.use('/api/skills', skillsRoutes);

//Conexão com o DB
const { DB_CONNECTION } = process.env;

console.log('Starting connection to MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(`MongoDB connection error - ${err}`);
    };
  }
);

const { connection } = mongoose;

connection.once('open', () => {
  console.log('Connected to MongoDB');

  const APP_PORT = process.env.PORT;
  app.listen(APP_PORT, () => {
    console.log(`Server started on Port ${APP_PORT}`);
  });
});
