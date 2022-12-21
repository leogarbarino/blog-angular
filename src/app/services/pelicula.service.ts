import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";


@Injectable()
export class PeliculaService{

    public peliculas!: Pelicula[];

    constructor(){
        this.peliculas= [
            new Pelicula("Spiderman 4", 2021, "https://sobrecomic.com/wp-content/uploads/2008/11/spiderman-4.jpg"),
            new Pelicula("Los vengadores endgame", 2022, "https://www.elsoldemexico.com.mx/gossip/k18upx-avengers-endgame.jpg/ALTERNATES/LANDSCAPE_960/avengers-endgame.jpg"),
            new Pelicula("Batman vs Superman", 2014, "https://www.elviejotopo.com/wp-content/uploads/2016/03/batman-v-superman-dawn-of-justice_bb788b6f.jpg"),
            new Pelicula("Batman vs Superman 2", 2017, "https://i.pinimg.com/originals/04/1b/84/041b84bf036f0f71300cdb062e0b9591.jpg"),
            new Pelicula("The Flash", 2022, "https://marvin.com.mx/wp-content/uploads/2021/04/the-flash-dc-pelicula-rodaje-barry-allen-1.jpg"),
            new Pelicula("Capitán América: Civil War", 2015, "https://www.cultture.com/pics/2015/11/nesnglot40mtvy_3_b.jpg"),
            new Pelicula("Linterna Verde", 2011, "https://i.blogs.es/e98ea0/green-lantern-poster/1366_2000.jpg"),
            new Pelicula("Thor: Love and Thunder", 2022, "https://www.pcworld.es/cmsdata/features/3801233/thor_amor_y_trueno_thumb1200_4-3.jpg"),
            new Pelicula("Wonder woman", 2017, "https://i.blogs.es/fc7807/wonder-woman0/450_1000.jpg")
          ];
    }

    holaMundo(){
        return "Hola mundo desde un servicio de Angular";
    }

    getPeliculas(){
      return this.peliculas;
    }

}