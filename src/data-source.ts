import "reflect-metadata"
import { DataSource } from 'typeorm';
import { Photo } from './Models/Photo';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "testorm",
  password: "password123",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [Photo],
  subscribers: [],
  migrations: [],
})

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error))