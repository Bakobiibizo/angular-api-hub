import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ArtData from './art.interface';
import { Base64Service } from '../base64-service/base64-service.service';
import { isBase64Image, Base64Image } from '../base64-service/base64-type';

@Injectable({
  providedIn: 'root',
})
export class ArtService {
  constructor(private http: HttpClient, private base64Service: Base64Service) {}
  fetchData(): Observable<ArtData> {
    base64Data = this.http.get<ArtData>('https://localhost:8888/art');
    if (isBase64Image(base64Data)) {
      return this.base64Service.isBase64Image(base64Data);
    }
  }
}
