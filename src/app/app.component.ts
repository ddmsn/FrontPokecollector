import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[CommonModule,RouterOutlet],
})

export class AppComponent {

  title:string;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.nologin();

  }

  menuvisible=false;

  @HostListener('window:scroll',[])
  windowscroll(){
    if(window.pageYOffset>70){
      this.menuvisible=true;
    }
    else{
      this.menuvisible=false;
    }
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }

  loged(){
    if(localStorage.getItem("token")){
      return false;
    }
    else{
      return true;
    }
  }


  nologin(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }


}





