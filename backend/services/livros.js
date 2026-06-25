import {
  lerArquivo,
  escreveArquivo,
  sobrescreveArquivo,
} from "../services/fileManager.js";

export async function getTodosLivros() {
  try {
    return await lerArquivo("livros.json");
  } catch (error) {
    console.error(
      "Erro ao consultar livros no arquivo (services)",
      error.message,
    );
  }
}

export async function getLivroPorId(id) {
  try {
    const livros = await getTodosLivros();

    const livroFiltrado = livros.filter((livro) => livro.id === id)[0];
    if (!livroFiltrado) {
      const erro = new Error(`O ID (${id}) não existe na lista. (services)`);
      erro.status = 404;
      throw erro;
    }
    return livroFiltrado;
  } catch (error) {
    console.error("Erro ao buscar livro por id (services)", error.message);
    throw error;
  }
}

export async function adicionaLivro(livroNovo) {
  try {
    await escreveArquivo("livros.json", livroNovo);
  } catch (error) {
    console.error("Erro ao adicionar livro (services)", error.message);
    throw error;
  }
}

export async function modificaLivro(id, modificacoes) {
  try {
    let livrosAtuais = await getTodosLivros();
    const indiceSelecionado = livrosAtuais.findIndex(
      (livro) => livro.id === id,
    );

    if (indiceSelecionado === -1) {
      const erro = new Error(`O ID (${id}) não existe na lista. (services)`);
      erro.status = 404;
      throw erro;
    }

    const conteudoModificado = {
      ...livrosAtuais[indiceSelecionado],
      ...modificacoes,
    };

    livrosAtuais[indiceSelecionado] = conteudoModificado;

    await sobrescreveArquivo("livros.json", livrosAtuais);
  } catch (error) {
    console.error("Erro ao modificar livro (services)", error.message);
    throw error;
  }
}

export async function deletaLivro(id) {
  try {
    let livrosAtuais = await getTodosLivros();
    const livrosFiltrados = livrosAtuais.filter((livro) => livro.id !== id);
    if (livrosFiltrados.length === livrosAtuais.length) {
      const erro = new Error(`O ID (${id}) não existe na lista. (services)`);
      erro.status = 404;
      throw erro;
    }

    await sobrescreveArquivo("livros.json", livrosFiltrados);
  } catch (error) {
    console.error("Erro ao deletar livro (services)", error.message);
    throw error;
  }
}
