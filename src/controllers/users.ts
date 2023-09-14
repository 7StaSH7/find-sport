import { getUsers } from "@services/users/getUsers";
import { Elysia } from "elysia";

export const usersController = new Elysia().group("/users", (app) => {
  app.get("/", getUsers, {
    detail: {
      tags: ["Users"],
    },
  });

  return app;
});
