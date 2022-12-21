import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "espar"
})
export class EsParPipe implements PipeTransform{

    transform(value:any){
         var espar= " no es un año par";
         if(value % 2 == 0){
             espar= "es un año par"
         }
        return "El año de estreno de la película es " + value + "," + espar;      
    }
}  

