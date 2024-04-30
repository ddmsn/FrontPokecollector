import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { register_user } from './user_register';

@Injectable({
  providedIn: 'root'
})
export class ServiceusersService {

  //URL obtiene el API de POKEMONS
  private baseURL="http://localhost:8085/api";

  private authToken: string | null = null;


  constructor(private httpClient:HttpClient) { }

  deletepokemon(pokemonId:string,userPokemonId:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.baseURL}/deletepokemon`,{
      body:{pokemonId,userPokemonId}
    })

  }

  guardarUserPokemon(userData:register_user): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/regist`, userData);
  }

  login(credentials:{nombre:string; contrasena:string}): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}/loginn`, credentials);
  }
  setAuthToken(token: string): void {
    this.authToken = token;
    localStorage.setItem('token', token);
  }

  getAuthToken(): string | null {
    if (!this.authToken) {
      this.authToken = localStorage.getItem('token');
    }
    return this.authToken;
  }

  logout(): void {
    this.authToken = null;
    localStorage.removeItem('token'); 
  }

  getUserInfo(): any {
    const token = this.getAuthToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return { nombreUsuario: payload.sub};
    }
    return null;
  }
  
  getAuthHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  findUserIdByNombre(nombre: string): Observable<number> {
    return this.httpClient.post<number>(`${this.baseURL}/find-id`, { nombre });
  }


}
