import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user: any;
  public campo: any;

  constructor() { 
    this.user= {
      nombre: "",
      apellido: "",
      bio: "",
      genero: ""

    };
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Formulario envíado!!")
    console.log(this.user);
  }

  hasDadoClick(){
    alert("Has dado click!!");
  }

  hasSalido(){
    alert("Has salido!");
  }

}
