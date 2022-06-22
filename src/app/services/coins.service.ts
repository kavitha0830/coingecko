import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Coin } from '../model/coin';

const coinsUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10';
const coinUrl = 'https://api.coingecko.com/api/v3/coins'

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http: HttpClient) { }

  // Coins API with set parameters
  getCoins(): Observable<Coin[]> {
    return (this.http.get(coinsUrl) as Observable<Coin[]>)
    .pipe(
      retry(2)
    )
  }

}
