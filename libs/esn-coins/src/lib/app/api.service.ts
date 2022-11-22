import { catchError, delay, filter, map, take, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from './+state/types';
export interface news {
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class apiService {
  timestamp: any;
  private BaseUrl = 'https://min-api.cryptocompare.com/data';
  private key =
    '&api_key=3d58f3dcea604a53c820cc8ecaa3e1e5dea1f415f95a9b8f236b92e033aca9db';
  constructor(private http: HttpClient) {}

  coinList(coin: string): Observable<UserResponse> {
    return this.http
      .get<UserResponse>(this.BaseUrl + '/all/coinlist')
      .pipe(filter((d: any) => d['Data'][coin]['Name'] === coin));
  }

  Price(coin: string): Observable<UserResponse> {
    let url = this.BaseUrl + '/pricemultifull?fsyms=' + coin + '&tsyms=USD';
    return this.http.get<UserResponse>(url).pipe(
      map((d: any) => {
        return d['DISPLAY'][coin]['USD']['PRICE'];
      })
    );
  }
}
