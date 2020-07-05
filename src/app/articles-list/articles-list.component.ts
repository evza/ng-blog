import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articles: Article[] = [];

// прописываем в маршрутизаторе(название компонента)
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void { //просит статьи
    this.articleService
      .getArticles()
      .subscribe(articles => this.articles = articles);
  }

}
