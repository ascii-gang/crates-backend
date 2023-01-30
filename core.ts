import { app } from "./config/mod.ts";
import find from "./helper.ts";
import "./routes/mod.ts";

app.listen(3000, () => console.log("http://localhost:3000"));
