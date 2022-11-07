import { Photo } from '../Models/Photo';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  try {
    const photo = new Photo();
    photo.filename = "asd";
    photo.description = "not bad";
    photo.isPublished = true;
    photo.name = "photo1";
    photo.views = 0
    await AppDataSource.manager.save(photo)
    return res.json(photo).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

export default {
  create
}