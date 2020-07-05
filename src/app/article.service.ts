import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARTICLES } from './mock-articles';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> { //получить статьи изи наблюдаемой коллекции
    const articles: Article[] = ARTICLES; // заполняем Article[] из ARTICLES
    return of(articles); // возвращаем статьи
  }

  getArticle(key: string): Observable<Article> {   //наблюдаемая статья
    const articles: Article[] = ARTICLES.filter(a => a.key === key);
    return of(articles[0]);
  }
}
