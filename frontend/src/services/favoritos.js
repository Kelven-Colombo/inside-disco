import api from "./api";

export async function getFavoritos() {
  try {
    const response = await api.get("/favoritos");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar favoritos", error.message);
  }
}

export async function postFavorito(id) {
  try {
    await api.post(`favoritos/${id}`);
  } catch (error) {
    console.error("Erro ao adicionar favorito", error.message);
  }
}

export async function deleteFavorito(id) {
  await api.delete(`favoritos/${id}`);
}
