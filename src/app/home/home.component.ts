import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 standalone:true,
 imports:[RouterModule]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  numberrandom: number;

  ngOnInit(): void {
    this.random();
  }

  navigatelogin() {
    this.router.navigate(['/login']);
  }

  navigatepokedex() {
    this.router.navigate(['/pokedex']);
  }
  navigateregister() {
    this.router.navigate(['/register']);
  }

  random() {
    this.numberrandom = Math.floor(Math.random() * 4);
  }
}
