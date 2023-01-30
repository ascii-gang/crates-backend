import { json, opine, urlencoded } from "../deps.ts";

const app = opine();

app.use(json());
app.use(urlencoded());

export { app };
