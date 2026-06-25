import api from "./api";

export async function getLivros() {
  const response = await api.get("/livros");

  return response.data;
}
