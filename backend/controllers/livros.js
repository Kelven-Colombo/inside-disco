import {
  getTodosLivros,
  getLivroPorId,
  adicionaLivro,
  modificaLivro,
  deletaLivro,
} from "../services/livros.js";

export async function getLivros(req, res) {
  try {
    const livros = await getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send("Erro ao consultar os livros (controllers)", error.message);
  }
}

export async function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (!id || isNaN(Number(id))) {
      res.status(422);
      res.send("ID inválido");
      return;
    }

    const livro = await getLivroPorId(id);

    if (!livro) {
      res.status(404);
      res.send("Livro não encontrado");
      return;
    }

    res.send(livro);
  } catch (error) {
    res.status(error.status || 500);
    res.send("Erro ao buscar livro (controllers)", error.message);
  }
}

export async function postLivro(req, res) {
  try {
    const body = req.body;

    if (!body || Object.keys(body).length === 0) {
      return res.status(400).send("Corpo da requisição vazio");
    }

    if (!body.nome || body.nome.trim() === "") {
      return res.status(400).send("Nome não pode ser vazio");
    }

    if (!body.id || isNaN(Number(body.id))) {
      return res.status(400).send("ID inválido ou ausente");
    }

    const livroNovo = body;

    await adicionaLivro(livroNovo);
    res.status(201);
    res.send("Livro inserido com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
    console.error(
      "Não foi possível adicionar o livro (controllers)",
      error.message,
    );
  }
}

export async function patchLivro(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    if (!id || isNaN(Number(id))) {
      res.status(422);
      res.send("ID inválido");
      return;
    }

    if (!body || Object.keys(body).length === 0) {
      return res.status(400).send("Corpo da requisição vazio");
    }

    if (body.nome !== undefined && body.nome.trim() === "") {
      return res.status(400).send("Nome não pode ser vazio");
    }

    await modificaLivro(id, body);
    res.send("Livro modificado com sucesso");
  } catch (error) {
    res.status(error.status || 500);
    res.send(error.message);
    console.error(
      "Não foi possível modificar o livro (controllers)",
      error.message,
    );
  }
}

export async function deleteLivro(req, res) {
  try {
    const id = req.params.id;

    if (!id || isNaN(Number(id))) {
      res.status(422);
      res.send("ID inválido");
      return;
    }

    await deletaLivro(id);
    res.send("Livro deletado com sucesso");
  } catch (error) {
    res.status(error.status || 500);
    res.send(error.message);
    console.error(
      "Não foi possível deletar o livro (controllers)",
      error.message,
    );
  }
}
