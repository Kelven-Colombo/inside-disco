import fs from "fs/promises";

export async function lerArquivo(nomeArquivo) {
  try {
    return JSON.parse(await fs.readFile(`data/${nomeArquivo}`));
  } catch (error) {
    console.error(`Erro ao ler ${nomeArquivo}`, error.message);
    return [];
  }
}

export async function escreveArquivo(nomeArquivo, novoDado) {
  try {
    if (!nomeArquivo) {
      console.log("Arquivo não existe ou o caminho tá errado");
      return;
    }
    const dadosAtuais = await lerArquivo(nomeArquivo);

    const jaExiste = dadosAtuais.some((item) => item.id === novoDado.id);

    if (jaExiste) {
      throw new Error("Item já existe");
    }

    await fs.writeFile(
      `data/${nomeArquivo}`,
      JSON.stringify([...dadosAtuais, novoDado]),
    );
    console.log("Salvo com Sucesso");
  } catch (error) {
    console.error(
      `Erro ao escrever em ${nomeArquivo} (services/escreveArquivo)`,
      error.message,
    );
    throw error;
  }
}

export async function sobrescreveArquivo(nomeArquivo, dadosModificados) {
  try {
    await fs.writeFile(`data/${nomeArquivo}`, JSON.stringify(dadosModificados));
    console.log(`Arquivo ${nomeArquivo} sobrescrito com sucesso`);
  } catch (error) {
    console.error(`Erro ao escrever em ${nomeArquivo}`, error.message);
    throw error;
  }
}