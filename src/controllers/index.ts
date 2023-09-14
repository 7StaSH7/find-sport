import { Elysia } from "elysia";
import { usersController } from "@controllers/users";

export const controllers = new Elysia().use(usersController);
