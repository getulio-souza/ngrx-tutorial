import { createReducer, on } from "@ngrx/store";
import { Livro } from "../livro.model";
import { livrosAction } from "./livros.actions";

enum LivroStatus{
  loading = 'loading',
  pending = 'pending',
  error = 'error',
  success = 'success'
}

export interface LivrosState{
  livros: Livro[],
  error: '' | null,
  status: LivroStatus
}

const initialState: LivrosState = {
  error: null,
  status: LivroStatus.pending,
  livros: []
}

export const livroReducer = createReducer(
  initialState,
  on(livrosAction.loadBooks, (stateAtual)=> {
    console.log('passou por aqui:', stateAtual)
    return{
      ...stateAtual,
      status: LivroStatus.success
    }
  }),

  on(livrosAction.loadBooksSuccessfully, (stateAtual, livrosObj) => {
    return {
      ...stateAtual,
      livros: livrosObj.livros
    }
  }),

  on(livrosAction.addBooks, (stateAtual, livro) => {
    return {
      ...stateAtual,
      livros: [...stateAtual.livros, livro]
    }
  })
)
