import express from 'express';
const routes = express.Router();
routes.get('/test', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

export default routes;
