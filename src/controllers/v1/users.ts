import { getUsers } from "@services/users/getUsers";
import Elysia from "elysia";

export const usersController = (mainApp: Elysia) => {
  mainApp.group("/users", (app) => {
    app.get("", getUsers, {
      detail: {
        tags: ["Users"],
      },
    });

    return app;
  });

  return mainApp;
};
