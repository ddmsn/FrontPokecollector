import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { UserComponent } from './user/user.component';
import { loginGuard } from './guards/login.guard';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RegisterComponent } from './register/register.component';
import { CombateComponent } from './combate/combate.component';

export const routes: Routes = [
        {path:'',component:HomeComponent},
        {path:'inicio',component:HomeComponent},
        {path:'pokedex',component:PokedexComponent},
        {path:'user',component:UserComponent,
        canActivate:[loginGuard]
        },
        {path:'pokemon',component:PokemonComponent,
        canActivate:[loginGuard]
        },
        {path:'combate',component:CombateComponent,
        canActivate:[loginGuard]
        },
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'**',component:ErrorPersonalizadoComponentComponent}
      
      ]; 

