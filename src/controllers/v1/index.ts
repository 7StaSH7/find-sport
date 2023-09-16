import { usersController } from "@controllers/v1/users";
import { Elysia } from "elysia";

export const v1Controllers = (app: Elysia) => {
  app.use(usersController);

  return app;
};
