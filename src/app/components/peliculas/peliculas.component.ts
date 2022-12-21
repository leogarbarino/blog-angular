import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas!: Pelicula[];
  public favorita!: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaservice: PeliculaService
  ) { 
    this.titulo= "Componente películas";
    this.peliculas= this._peliculaservice.getPeliculas();
    this.favorita= {title:"", year:0, image:""};
    this.fecha= new Date(2020, 8, 12);

    
  }

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log("Componente on init iniciado");
    console.log(this._peliculaservice.holaMundo());
  }

  ngDoCheck(){
    console.log("DoCheck lanzado");
  }

  cambiarTitulo(){
    this.titulo= "El Título se ha cambiado!";
  }

  ngOnDestroy(): void {
      console.log("El componente se va a eliminar de la ejecución!")
  }

  mostrarFavorita(event:any): void{
    console.log(event);
    this.favorita= event.pelicula;
  }

}
