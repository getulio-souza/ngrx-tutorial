import { createReducer } from "@ngrx/store";
import { Livro } from "../livro.model";
import { on } from "events";
import { livroAction } from "./livros.actions";

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
  on(livroAction.loadBooks, (stateAtual) => {
    return {
      ...stateAtual,
      livros: initialBooks,
      status: LivroStatus.success
    }
  })
)

const initialBooks = [
      {
        id: 1,
        nome: 'harry potter 1'
      },
      {
        id: 1,
        nome: 'harry potter 2'
      },
      {
        id: 1,
        nome: 'harry potter 3'
      },
    ]
