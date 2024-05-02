import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { register_user } from './user_register';

@Injectable({
  providedIn: 'root'
})
export class ServiceusersService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

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
    sessionStorage.setItem('token', token);
  }

  getAuthToken(): string | null {
    if (!this.authToken) {
      this.authToken = sessionStorage.getItem('token');
    }
    return this.authToken;
  }

  logout(): void {
    this.authToken = null;
    sessionStorage.removeItem('token'); 
    sessionStorage.removeItem('user'); 
    this.isLoggedInSubject.next(false);
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

  getAuthenticationState(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
  
  handleLogin(response: any): void {
    console.log('Autenticación Exitosa');
    console.log('Token:', response.token);
    console.log('Nombre:', response.nombre);
    this.setAuthToken(response.token);
    this.isLoggedInSubject.next(true); // Emitir verdadero para indicar que el usuario ha iniciado sesión
    // Realiza cualquier otra acción necesaria después del inicio de sesión
  }

  handleLoginError(error: any): void {
    console.error('Error en la autenticación:', error);
    // Realiza cualquier otra acción necesaria en caso de error de inicio de sesión
  }
}
