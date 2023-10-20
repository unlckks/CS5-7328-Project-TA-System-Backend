import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './modules/user/user.routes';
import tajobRoutes from './modules/tajobs/tajob.routes';

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS
app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight request. 
  // By default, send a 200 status for OPTIONS requests.
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  // api log
  console.log('Incoming request:', req.method, req.originalUrl, req.query);
  

  next();
});

// import routes which are defined in modules
app.use('/user', userRoutes);
app.use('/jobs', tajobRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});


export default app;