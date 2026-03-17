import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LivroService } from "../livro.service";
import { livrosAction } from "./livros.actions";
import { catchError, map, switchMap, tap } from "rxjs/operators";

export const buscarLivroEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const livroService = inject(LivroService);

    return actions$.pipe(
      ofType(livrosAction.loadBooks),
      tap(()=> console.log('passou pelo effect')),
      switchMap(() => livroService.obterLivrosApi()
        .pipe(
          map(livros => livrosAction.loadBooksSuccessfully({ livros }))
        )
      )
    );
  },
  { functional: true }
);
