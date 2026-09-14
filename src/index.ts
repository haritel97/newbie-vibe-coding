import { Elysia } from "elysia";
import { db, schema, poolConnection } from "./db";

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const app = new Elysia()
  .get("/", () => {
    return {
      message: "Hello World from ElysiaJS with Bun!",
      status: "running",
      timestamp: new Date().toISOString(),
    };
  })
  .get("/health", async () => {
    let dbStatus = "disconnected";
    try {
      await poolConnection.query("SELECT 1");
      dbStatus = "connected";
    } catch (error: any) {
      dbStatus = `unavailable (${error?.message || "connection error"})`;
    }

    return {
      status: "ok",
      server: "healthy",
      database: dbStatus,
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  })
  .get("/users", async () => {
    try {
      const usersList = await db.select().from(schema.users);
      return { success: true, data: usersList };
    } catch (error: any) {
      return {
        success: false,
        message: "Failed to query database. Make sure MySQL is running and migrations are applied.",
        error: error?.message,
      };
    }
  })
  .listen(port);

console.log(
  `🚀 Server is running at http://${app.server?.hostname}:${app.server?.port}`
);

export { app };
export type App = typeof app;

