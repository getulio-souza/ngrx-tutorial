import { createAction, props } from "@ngrx/store";
import { Livro } from "../livro.model";

const loadBooks = createAction('[Livros] Carregar Livros')
const loadBooksSuccessfully =
createAction('[livros] livros carregados com sucesso', props<{livros : Livro[] }>)

export const livrosAction = {
  loadBooks
}
