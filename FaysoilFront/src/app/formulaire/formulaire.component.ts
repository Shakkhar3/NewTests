import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent {
 
  constructor(private router: Router){}
  
  nomCapitaine: string = '';
  prenomCapitaine: string = '';
  nomEquipe: string = '';
  joueurs: { nom: string, prenom: string, pseudo: string, dob: string }[] = [{ nom: '', prenom: '', pseudo: '', dob: '' }];
  tournoiChoisi?: string;
  LeagueOfLegends? : string
  FIFAPS5? : string
  FIFAXBOX? : string

    // Méthode pour ajouter un joueur au tableau
    ajouterJoueur() {
      this.joueurs.push({ nom: '', prenom: '', pseudo: '', dob:'' });
    }
  
    // Méthode pour supprimer un joueur du tableau
    supprimerJoueur(index: number) {
      this.joueurs.splice(index, 1);
    }

    submitForm() {
        console.log('Form submitted');
        console.log('Nom de l\'équipe:', this.nomEquipe);
        console.log('Tournois Choisi:', this.tournoiChoisi);
        console.log('Joueurs:', this.joueurs);
        console.log('Nom du capitaine:', this.nomCapitaine);
      
    }

    trackByFn(index: number, item: any) {
      return index; // Retourne l'index comme identifiant unique
    }

    retournerAuChoix() {
      this.router.navigate(['/choix']);
    }
    
}
