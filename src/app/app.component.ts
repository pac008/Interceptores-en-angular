import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptores';

  constructor( private usuariosService: UsuariosService ) {

    this.usuariosService.obtenerUsuarios()
          .subscribe( resp => {
            console.log( resp );
          }, err => {
            console.log('Error desde el appComponent', err);
          })
  }

 
}
