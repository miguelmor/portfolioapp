import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from './../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {
    console.log("Servicio de infoPagina listo!");

    this.cargarInfo();
    this.cargarEquipo();
  }


  private cargarInfo(){
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {

          this.cargada = true;
          this.info = resp;

          console.log(resp);
          // console.log( resp['twitter'] );
          // console.log( resp['facebook'] );
        } );
  }


  private cargarEquipo(){
    this.http.get('https://angular-html-b29ec.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;

      console.log(resp);
    } );
  }

}
