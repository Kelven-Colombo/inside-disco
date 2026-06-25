import {
  getTodosLivros,
  getLivroPorId,
  adicionaLivro,
  modificaLivro,
  deletaLivro,
} from "../services/livros.js";

import {
  adicionaFavorito,
  deletaFavorito,
  getTodosFavoritos,
} from "../services/favoritos.js";

export async function getFavoritos(req, res) {
  try {
    const favoritos = await getTodosFavoritos();
    res.send(favoritos);
  } catch (error) {
    res.status(500);
    res.send("Erro ao consultar os favoritos (controllers)", error.message);
  }
}

export async function postFavorito(req, res) {
  try {
    const id = req.params.id;

    await adicionaFavorito(id);
    res.status(201);
    res.send("Favorito inserido com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
    console.error(
      "Não foi possível adicionar o favorito (controllers)",
      error.message,
    );
  }
}

export async function deleteFavorito(req, res) {
  try {
    const id = req.params.id;

    if (!id || isNaN(Number(id))) {
      res.status(422);
      res.send("ID inválido");
      return;
    }

    await deletaFavorito(id);
    res.send("Favorito deletado com sucesso");
  } catch (error) {
    res.status(error.status || 500);
    res.send(error.message);
    console.error(
      "Não foi possível deletar o favorito (controllers)",
      error.message,
    );
  }
}
