import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDetailsService } from '../../services/service-details.service';
import { TacheService } from '../../services/tache.service';
import { DevisService } from '../../services/devis.service'; // Service pour mettre à jour le devis
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Ajoute cette ligne
@Component({
  selector: 'app-modifier-devis',
  templateUrl: './modifier-devis.component.html',
  styleUrls: ['./modifier-devis.component.css'],
  imports: [RouterModule, CommonModule, ReactiveFormsModule,FormsModule]
})
export class ModifierDevisComponent implements OnInit {
  serviceDetailsId!: string;
  devisId!: string;
  tachesDisponibles: any[] = [];  // Liste des tâches disponibles
  tachesSelectionnees: any[] = [];  // Liste des tâches sélectionnées
  serviceDetails: any = null;
  description!: string;

  constructor(
    private route: ActivatedRoute,
    private serviceDetailsService: ServiceDetailsService,
    private tacheService: TacheService,
    private devisService: DevisService, // Service pour mettre à jour le devis
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.devisId = params.get('id')!;
      this.getDevis(this.devisId);
     


    });
  }

  getServiceDetails(serviceDetailsId: string): void {
    this.serviceDetailsService.getById(serviceDetailsId).subscribe(
      (data: any) => {
        this.serviceDetails = data;
      },
      error => console.error('Erreur lors de la récupération du service:', error)
    );
  }

  getTachesForServiceDetails(serviceDetailsId: string): void {
    this.serviceDetailsService.getTachesByServiceDetailsId(serviceDetailsId).subscribe(
      (data: any) => {
        this.tachesDisponibles = data;
      },
      error => console.error('Erreur lors de la récupération des tâches:', error)
    );
  }

  getDevis(devisId: string): void {
    this.devisService.getDevisById(devisId).subscribe(
    
      (data: any) => {
        this.serviceDetailsId=data.serviceDetails._id;
        this.description = data.description;
        this.tachesSelectionnees = data.taches;  // Assurez-vous que 'taches' contient un tableau d'ID des tâches
        this.updateDisponibles();  // Met à jour la liste des tâches disponibles
        console.log(this.serviceDetailsId);
        this.getServiceDetails(this.serviceDetailsId);
        this.getTachesForServiceDetails(this.serviceDetailsId);
      },
      error => console.error('Erreur lors de la récupération du devis:', error)
    );
  }

  // Mise à jour des tâches disponibles en fonction des tâches déjà sélectionnées dans le devis
  updateDisponibles(): void {
    this.tachesDisponibles = this.tachesDisponibles.filter(tache =>
      !this.tachesSelectionnees.some(selectedTache => selectedTache._id === tache._id)
    );
  }

  // Ajouter une tâche au panier
  ajouterTache(tache: any): void {
    this.tachesSelectionnees.push(tache);
    this.tachesDisponibles = this.tachesDisponibles.filter(t => t._id !== tache._id);
  }

  // Retirer une tâche du panier
  retirerTache(tache: any): void {
    this.tachesDisponibles.push(tache);
    this.tachesSelectionnees = this.tachesSelectionnees.filter(t => t._id !== tache._id);
  }

  getTotalPrix(): number {
    return this.tachesSelectionnees.reduce((total, tache) => total + tache.prix, 0);
  }

  getTotalDuree(): number {
    return this.tachesSelectionnees.reduce((total, tache) => total + tache.tempsEstime + tache.marge, 0);
  }

  // Mettre à jour le devis
  modifierDevis(): void {
    if (this.tachesSelectionnees.length === 0) {
      alert("Veuillez sélectionner au moins une tâche pour modifier le devis.");
      return;
    }

    const devisData = {
      serviceDetails: this.serviceDetailsId,
      description: this.description,
      taches: this.tachesSelectionnees.map(t => t._id)
    };

    this.devisService.editDevis(this.devisId, devisData).subscribe(
      (response: any) => {
        alert("Devis modifié avec succès !");
        this.router.navigate([`/liste-devis/${this.serviceDetailsId}`]);
      },
      error => console.error("Erreur lors de la modification du devis :", error)
    );
  }
}
