import { Router } from 'express'
import PhotosController from '../Controllers/PhotosController';

const routes = Router()

routes.get('/', (req, res) => {
  return res.send('Hello world').status(200)
});

routes.get('/healt', (req, res) => {
  console.log('app is working')
  return res.send('app is working').status(200)
})

routes.post('/photo', PhotosController.create)

export default routes
