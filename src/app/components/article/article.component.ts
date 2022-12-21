import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { Global } from 'src/app/services/global';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article!: Article;
  public url!: string;
  

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
      this.url= Global.url;
      
   }

  ngOnInit(): void {
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

   delete(id: string){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estás seguro que quieres eliminarlo?',
      text: "Se eliminará para siempre!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, quiero!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._articleService.delete(id).subscribe(
          response => {
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              'El archivo se eliminó',
              'success'
              
            )
             this._router.navigate(['/blog']);
          },
          error => {
            console.log(error);
            this._router.navigate(['/blog']);
   
          }
        );

        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tranquilo! El archivo permanecerá!',
          'error'
        )
      }
    });
    
     

   }
}
