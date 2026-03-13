import { createAction } from "@ngrx/store";

const loadBooks = createAction('[Livros] Carregar Livros')

export const livrosAction = {
  loadBooks
}
