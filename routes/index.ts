import find from "../helper.ts";
import { app } from "../config/mod.ts";

app.get("/", (req, res) => {
  res.send("Invalid URL");
});

app.get("/:package", async (req, res) => {
  const crate = req.params.package;

  const data = await find(crate);

  res.send(data);
});
