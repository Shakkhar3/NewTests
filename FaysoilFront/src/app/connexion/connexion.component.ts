import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {

  
  constructor(private router: Router){}

  allerAuChoix() {
    this.router.navigate(['/choix']);
  }

}
