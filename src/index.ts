import express, { Response, Request } from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/user";
const port = 5000;
createConnection()
  .then(async connection => {
    const userRepository = connection.getRepository(User);
    const app = express();

    app.get("/users", async function (req: Request, res: Response) {
      const users = await userRepository.find();
      res.json(users);
    });

    await app.listen(port);
    console.log(`Accessing in asdf1 ${port}`);
  })
  .catch(error => {
    console.log("12312", error);
  });
