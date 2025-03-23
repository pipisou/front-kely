import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component'; // Assurez-vous d'importer le bon composant
import { ArticleComponent } from './components/article/article.component'; // Assurez-vous d'importer le bon composant
import { AjoutMecanicienComponent } from './components/ajout-mecanicien/ajout-mecanicien.component';
import { HorairesMecanicienComponent  } from './components/horaires-mecanicien/horaires-mecanicien.component';
import { AbsenceComponent  } from './components/absence/absence.component';
import { ModifierMecanicienComponent  } from './components/modifier-mecanicien/modifier-mecanicien.component';
import { AjoutCategorieComponent } from './components/ajout-categorie/ajout-categorie.component';
import { EditCategorieComponent } from './components/edit-categorie/edit-categorie.component';
import { AjoutArticleComponent } from './components/ajout-article/ajout-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { AjoutSpecialiteComponent } from './components/ajout-specialite/ajout-specialite.component';
import { EditSpecialiteComponent } from './components/edit-specialite/edit-specialite.component';
import { AjoutStockComponent } from './components/ajout-stock/ajout-stock.component';
import { EditStockComponent } from './components/edit-stock/edit-stock.component';
import { AjoutServiceComponent } from './components/ajout-service/ajout-service.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { AjoutCategorieVehiculeComponent } from './components/ajout-categorie-vehicule/ajout-categorie-vehicule.component';
import { EditCategorieVehiculeComponent } from './components/edit-categorie-vehicule/edit-categorie-vehicule.component';
import { AjoutServiceDetailsComponent } from './components/ajout-service-details/ajout-service-details.component';
import { ServiceDetailsComponent } from './components/liste-service-details/liste-service-details.component';
import {ModifierServiceDetailsComponent } from './components/modifier-detailservice/modifier-detailservice.component';
import {TacheFormComponent } from './components/ajout-tache/ajout-tache.component';
import {ListeTacheServicesDetailsComponent } from './components/liste-tache-services-details/liste-tache-services-details.component';
import {ModifierTachesComponent  } from './components/modifier-taches/modifier-taches.component';
import {AjoutDevisComponent } from './components/ajout-devis/ajout-devis.component';
import {ListeDevisComponent } from './components/liste-devis/liste-devis.component';
import {ModifierDevisComponent } from './components/modifier-devis/modifier-devis.component';
import {MenuAdminComponent } from './components/menu-admin/menu-admin.component';
export const routes: Routes = [
  { path: '', redirectTo: 'menu-admin', pathMatch: 'full' },
  { path: 'menu-admin', component: MenuAdminComponent},
  { path: 'bienvenu', component: LandingPageComponent },
  { path: 'login', component: LoginComponent }, // Route de connexion
  { path: 'article', component: ArticleComponent },
  { path: 'ajout-mecanicien', component: AjoutMecanicienComponent },
  { path: 'horaire/:id', component: HorairesMecanicienComponent },
  { path: 'absence/:id', component: AbsenceComponent },
  { path: 'modifier-mecanicien/:id', component: ModifierMecanicienComponent },
  { path: 'categories', component: AjoutCategorieComponent },
  { path: 'modifier-categorie/:id', component: EditCategorieComponent },
  { path: 'articles', component: AjoutArticleComponent  },
  { path: 'modifier-article/:id', component: EditArticleComponent },
  { path: 'specialites', component: AjoutSpecialiteComponent  },
  { path: 'modifier-specialite/:id', component: EditSpecialiteComponent },
  { path: 'stocks', component: AjoutStockComponent  },
  { path: 'modifier-stock/:id', component: EditStockComponent },
  { path: 'services', component: AjoutServiceComponent  },
  { path: 'modifier-service/:id', component: EditServiceComponent },
  { path: 'categorie-vehicules', component: AjoutCategorieVehiculeComponent  },
  { path: 'modifier-categorie-vehicule/:id', component: EditCategorieVehiculeComponent},
  { path: 'services-details', component:  AjoutServiceDetailsComponent},
  { path: 'liste-services-details', component:  ServiceDetailsComponent},
  { path: 'modifier-services-details/:id', component:  ModifierServiceDetailsComponent},
  { path: 'tache-services-details/:id', component:  TacheFormComponent},
  { path: 'modifier-taches/:id', component:  ModifierTachesComponent },
  { path: 'liste-tache-services-details/:id', component:  ListeTacheServicesDetailsComponent},
  { path: 'ajout-devis/:id', component:  AjoutDevisComponent},
  { path: 'liste-devis/:id', component:  ListeDevisComponent},
  { path: 'modifier-devis/:id', component:  ModifierDevisComponent}


];
