import {
  lerArquivo,
  escreveArquivo,
  sobrescreveArquivo,
} from "../services/fileManager.js";
import { getTodosLivros } from "./livros.js";

export async function getTodosFavoritos() {
  try {
    return await lerArquivo("favoritos.json");
  } catch (error) {
    console.error(
      "Erro ao consultar favoritos no arquivo (services)",
      error.message,
    );
  }
}

export async function adicionaFavorito(id) {
  try {
    const livros = await getTodosLivros();
    const favoritos = await getTodosFavoritos();

    const livroInserido = livros.find((livro) => livro.id === id);

    const novaListaFavoritos = [...favoritos, livroInserido];

    await sobrescreveArquivo("favoritos.json", novaListaFavoritos);
  } catch (error) {
    console.error("Erro ao adicionar favorito (services)", error.message);
    throw error;
  }
}

export async function deletaFavorito(id) {
  try {
    let livrosAtuais = await getTodosFavoritos();
    const livrosFiltrados = livrosAtuais.filter((livro) => livro.id !== id);
    if (livrosFiltrados.length === livrosAtuais.length) {
      const erro = new Error(`O ID (${id}) não existe na lista. (services)`);
      erro.status = 404;
      throw erro;
    }

    await sobrescreveArquivo("favoritos.json", livrosFiltrados);
  } catch (error) {
    console.error("Erro ao deletar favorito (services)", error.message);
    throw error;
  }
}
