import { v1Controllers } from "@controllers/v1";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

const app = new Elysia();

app.use(
  swagger({
    path: "/api/swagger",
  })
);

app.group("/api", (app) => {
  app.use(v1Controllers);

  return app;
});

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
