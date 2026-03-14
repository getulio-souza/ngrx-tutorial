import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LivroService } from "../livro.service";
import { livrosAction } from "./livros.actions";
import { switchMap } from "rxjs";

export const buscarLivroEffect = createEffect(
    (actions$ = inject(Actions), LivroService = inject(LivroService)) => {
        return actions$.pipe(
            ofType(livrosAction.loadBooks),
            switchMap(
                ()=> LivroService.obterLivrosApi()
                .pipe(
                    map(livros => )
                )
            )
        )
    }
)