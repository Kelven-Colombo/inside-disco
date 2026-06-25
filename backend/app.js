import express from "express";
import rotaLivros from "./routes/livros.js";
import rotaFavoritos from "./routes/favoritos.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/livros", rotaLivros);
app.use("/favoritos", rotaFavoritos);

const port = 8000;

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
