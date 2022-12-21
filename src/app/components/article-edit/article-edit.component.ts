import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { Global } from 'src/app/services/global';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article!: Article;
  public status!: string;
  public user!: any;
  public campo!: string;
  public is_edit!: boolean;
  public page_title!: string;
  public url!: string;

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
    this.is_edit= true;
    this.page_title= "Editar artículo";
    this.url= Global.url;
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: '',
    };
  }

  ngOnInit(): void {
    this.getArticle();
  }
  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

           // alerta con sweetalert2
           Swal.fire({
            title: 'Artículo editado!',
            text: 'El artículo se ha editado correctamente!',
            icon: 'success',
            confirmButtonText: 'OK'
           });

          
          this._router.navigate(['/blog/articulo', this.article._id]);
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        console.log(error);
        this.status = 'error';
         // alerta con sweetalert2
         Swal.fire({
          title: 'Edición fallida!!',
          text: 'El artículo no se ha podido editar, intenta luego!',
          icon: 'error',
          confirmButtonColor: '#3085d6' 
          
         });
      }
    );
  }

  imageUpload(data: { body: { image: any; }; }){
    let image_data= JSON.parse(JSON.stringify(data.body.image));
    this.article.image= image_data;
    console.log(data);
  }

  getArticle(){
    this._route.params.subscribe(params => {
      let id= params['id'];
      console.log(id);

      this._articleService.getArticle(id).subscribe(
          response => {
            if(response.article){
              this.article= response.article;
            }else{
              this._router.navigate(["/home"]);
            }
          },
          error => {
            console.log(error);
        
          }
      );

      
    
    });
  
  }
}



