import express, { Response, Request } from "express";
import { createConnection } from "typeorm";
import { app } from "./app";
import { User } from "./entities/user.entity";
const port = 5000;
createConnection()
  .then(async connection => {
    const userRepository = connection.getRepository(User);
    app.listen(port, () => {
      console.log("Connecting");
    });
    // const app = express();

    // app.get("/users", async function (req: Request, res: Response) {
    //   const users = await userRepository.find();
    //   res.json(users);
    // });

    // await app.listen(port);
    // console.log(`Accessing in port:  ${port}`);
  })
  .catch(error => {
    console.log("12312", error);
  });
