import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Livro } from '../livros/livro.model';
import { LivroService } from '../livros/livro.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { livrosAction } from '../livros/state/livros.actions';
import { livrosSelector } from '../livros/state/livros.selector';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  store = inject(Store)

  private livroService = inject(LivroService)

  title = 'ngrx-tutorial';

  livros$ = this.store.select(livrosSelector)

  livroInput: string = ""


  ngOnInit(): void {
    this.store.dispatch(livrosAction.loadBooks())
  }
  addBook() {
    this.store.dispatch(livrosAction.addBooks(
      {
        id: 10,
        nome: this.livroInput
      }
    ))
  }
}
