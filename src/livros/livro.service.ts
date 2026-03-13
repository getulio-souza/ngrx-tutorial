import { Injectable } from '@angular/core';
import { Livro } from './livro.model';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor() { }

  obterLivros(): Livro[] {
    return [
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
  }

  //o of transforma o array de livros em um observable
  obterLivrosApi() {
    return of(this.obterLivros())
    .pipe(delay(3000))
  }
}
