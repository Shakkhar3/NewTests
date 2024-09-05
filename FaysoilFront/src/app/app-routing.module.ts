import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormulaireSoloComponent } from './formulaire-solo/formulaire-solo.component';
import { ChoixComponent } from './choix/choix.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'solo', component: FormulaireSoloComponent},
  { path: 'choix', component: ChoixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
