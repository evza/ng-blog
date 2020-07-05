import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(
    private route: ActivatedRoute,
    private articleServise: ArticleService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const key = params.key;
      this.articleServise.getArticle(key).subscribe(article => {
        if (article === undefined) {
           this.router.navigateByUrl('404'); // перенаправляем на аварийную траницу
          return;
        } 
          this.article = article;  // this.article  само поле. куда приходит взятая article
          
        });
    });
  }

}
