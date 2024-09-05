import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-solo',
  templateUrl: './formulaire-solo.component.html',
  styleUrls: ['./formulaire-solo.component.scss']
})
export class FormulaireSoloComponent {

  constructor(private router: Router){}
  joueur: { nom: string, prenom: string, pseudo: string, dob: string }[] = [{ nom: '', prenom: '', pseudo: '', dob: '' }];
  
  tournoiChoisi?: string;
  FIFAPS5? : string
  FIFAXBOX? : string


    submitForm() {
        console.log('Form submitted');
        console.log('Nom de l\'équipe:', this.joueur);
        console.log('Tournois Choisi:', this.tournoiChoisi);
    }

    retournerAuChoix() {
      this.router.navigate(['/choix']);
    }
    
    
}
