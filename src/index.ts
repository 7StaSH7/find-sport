import { controllers } from "@controllers/index";
import jwt from "@elysiajs/jwt";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

const app = new Elysia();

app.use(
  swagger({
    path: "/api/swagger",
  })
);

app.use(jwt({ name: "auth", secret: Bun.env.JWT_SECRET! }));

app.group("/api", (app) => {
  app.use(controllers);

  return app;
});

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
