import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { UserComponent } from './user/user.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import { LoginComponent } from './login/login.component';
import { ListapokemonsComponent } from './listapokemons/listapokemons.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component'
/*DECLARAMOS UN ARRAY CON LOS PATHS DE LOS COMPONENTES*/
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'inicio',component:HomeComponent},
  {path:'pokedex',component:PokedexComponent},
  {path:'user',component:UserComponent},
  {path:'pokemon',component:PokemonComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:ErrorPersonalizadoComponentComponent}

];

/*DECLARAMOS LOS NUEVO COMPONENTES*/
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokedexComponent,
    UserComponent,
    PokemonComponent,
    ErrorPersonalizadoComponentComponent,
    LoginComponent,
    ListapokemonsComponent,
    RegisterComponent,
    MenuPrincipalComponent,

  ],
  /*LE PASAMOS A ROUTERMODULE EL ARRAY CON LAS RUTAS*/
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioUsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
