//маршрутизатор

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

// для перехода по ссылкам
const routes: Routes = [
  { path: 'articles', component: ArticlesListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: ArticlesListComponent }, // обьявили базовой страницей
  { path: ':key', component: ArticleComponent },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
