import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { register_user } from './user_register';

@Injectable({
  providedIn: 'root'
})
export class ServicepokemonsService {
  //URL obtiene el API de POKEMONS
  private baseURL="http://localhost:8085/api"; 

  private authToken: string | null = null;

  constructor(private httpClient:HttpClient) { }

  obtenerPokemons():Observable<Pokemon[]>{

    return this.httpClient.get<Pokemon[]>(`${this.baseURL}/pokemon`);
  }

  guardarUserPokemon(userData:register_user): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/regist`, userData);
  }

  login(credentials:{nombre:string; contrasena:string}): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}/loginn`, credentials);

  }

  obteneruserPokemons(nombre:string):Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.baseURL}/users/pokemons?username=${nombre}`);
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
    localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
  }

  getUserInfo(): any {
    const token = this.getAuthToken();
    console.log('Token:', token); // Verifica que el token no sea nulo o indefinido
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Payload:', payload); // Verifica el contenido del payload
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




}
  

