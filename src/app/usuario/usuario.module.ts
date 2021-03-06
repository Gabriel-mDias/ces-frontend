import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { UsuarioPerfilEditComponent } from './usuario-perfil-edit/usuario-perfil-edit.component';
import { UsuarioSenhaEditComponent } from './usuario-senha-edit/usuario-senha-edit.component';

@NgModule({
  declarations: [UsuarioListComponent, UsuarioFormComponent, UsuarioPerfilComponent, UsuarioPerfilEditComponent, UsuarioSenhaEditComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class UsuarioModule { }
