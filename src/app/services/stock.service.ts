import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = `${environment.apiUrl}/stock`;

  constructor(private http: HttpClient) {}

  // Récupérer tous les stocks
  getStocks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Récupérer un stock par son ID
  getStockById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Ajouter un stock
  addStock(stock: any): Observable<any> {
    return this.http.post(this.apiUrl, stock);
  }

  // Mettre à jour un stock
  updateStock(id: string, stock: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, stock);
  }

  // Supprimer un stock
  deleteStock(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
