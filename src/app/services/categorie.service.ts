// category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class categorieService {
  private apiUrl = `${environment.apiUrl}/categorie`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCategoryById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addCategory(nomCategorie: string): Observable<any> {
    return this.http.post(this.apiUrl, { nomCategorie });
  }

  updateCategory(id: string, nomCategorie: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { nomCategorie });
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
