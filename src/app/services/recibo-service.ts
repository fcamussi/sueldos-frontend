import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recibo} from '../models/recibo';

@Injectable({
  providedIn: 'root'
})
export class ReciboService {

  private apiUrl = 'http://localhost:8080/api/recibos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Recibo[]> {
    return this.http.get<Recibo[]>(this.apiUrl);
  }

}
