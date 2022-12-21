import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  public article!: Article;
  public status!: string;
  public user!: any;
  public campo!: string;
  public is_edit!: boolean;
  public page_title!: string;

  afuConfig = {
    uploadAPI: {
      url:Global.url + 'upload-image' 
    }
};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', '', null);
    this.page_title= "Crear artículo";
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: '',
    };
  }

  ngOnInit(): void {}

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog']);


          // alerta con sweetalert2
          Swal.fire({
           title: 'Artículo creado!',
           text: 'El artículo se ha creado correctamente!',
           icon: 'success'
          });
           

          

          
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  imageUpload(data: { body: { image: any; }; }){
    let image_data= JSON.parse(JSON.stringify(data.body.image));
    this.article.image= image_data;
    console.log(data);
  }
}
