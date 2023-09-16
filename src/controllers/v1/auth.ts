import { cookie } from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

export const auth = (mainApp: Elysia) => {
  mainApp.group("/auth", (app) => {
    app
      .use(jwt({ name: "jwt", secret: Bun.env.JWT_SECRET! }))
      .use(cookie())
      .derive(async ({ jwt, cookie, setCookie, body }) => {
        setCookie("auth", await jwt.sign(), {
          httpOnly: true,
          maxAge: 7 * 86400,
        });
      });

    return app;
  });
};
