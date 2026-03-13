import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Livro } from '../livros/livro.model';
import { LivroService } from '../livros/livro.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { livroAction } from '../livros/state/livros.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  store = inject(Store)

  private livroService = inject(LivroService)

  title = 'ngrx-tutorial';

  livros$ = this.livroService.obterLivrosApi()


  ngOnInit(): void {
    this.store.dispatch(livroAction.loadBooks())
  }
}
