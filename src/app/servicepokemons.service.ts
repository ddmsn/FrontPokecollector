import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicepokemonsService {
  private baseURL = "http://localhost:8080/api";
  private authToken: string | null = null;
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  obtenerPokemons(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL}/pokemon`);
  }

  guardarUserPokemon(userData: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/regist`, userData);
  }

  login(credentials: { nombre: string; contrasena: string }): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/login`, credentials);
  }

  logout(): void {
    this.authToken = null;
    sessionStorage.removeItem("user");
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false); // Emitir falso para indicar que el usuario ha cerrado sesión
  }

  handleLogin(response: any): void {
    console.log('Autenticación Exitosa');
    console.log('Token:', response.token);
    this.setAuthToken(response.token);
    this.isLoggedInSubject.next(true); // Emitir verdadero para indicar que el usuario ha iniciado sesión
    // Realiza cualquier otra acción necesaria después del inicio de sesión
  }

  handleLoginError(error: any): void {
    console.error('Error en la autenticación:', error);
    // Realiza cualquier otra acción necesaria en caso de error de inicio de sesión
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

  getAuthenticationState(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  obteneruserPokemons(nombre: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.baseURL}/users/pokemons?username=${nombre}`);
  }

  getUserInfo(): any {
    const token = this.getAuthToken();
    console.log('Token:', token); // Verifica que el token no sea nulo o indefinido
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Payload:', payload); // Verifica el contenido del payload
      return { nombreUsuario: payload.sub };
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
