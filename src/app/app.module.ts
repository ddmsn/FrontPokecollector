import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceusersService } from './serviceusers.service';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { UserComponent } from './user/user.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import { LoginComponent } from './login/login.component';
import { ListapokemonsComponent } from './listapokemons/listapokemons.component';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import {CombateComponent} from "./combate/combate.component";
import {ChatService} from "./chat.service";
import { routes } from './app.routes';

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
    CombateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    ServiceusersService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
