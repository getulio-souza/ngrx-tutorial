import { livroReducer } from '../../livros/state/livro.reducer';
import { iAppState } from './app.state';
import { ActionReducerMap } from "@ngrx/store";

export const appReducers: ActionReducerMap<>iAppState = {
   livros: livroReducer
}
