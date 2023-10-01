import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArtData } from './art.interface';
import { Base64Service } from '../base64-service/base64-service.service';

@Injectable({
  providedIn: 'root',
})
export class ArtService {
  constructor(private http: HttpClient, private base64Service: Base64Service) {}
  fetchData(prompt: string): Observable<ArtData> {
    return this.http
      .get<ArtData>(`https://localhost:8888/art?prompt=${prompt}`)
      .pipe(
        map((imageResponse) => {
          const byteArray = this.base64Service.base64ToUint8Array(
            imageResponse.data
          );
          if (this.base64Service.isBase64PNG(byteArray)) {
            return imageResponse;
          } else {
            throw new Error('Invalid PNG data');
          }
        })
      );
  }
}
