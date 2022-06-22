import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../model/coin';
import { CoinsService } from '../services/coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  coins: Coin[] = [];

  constructor(private coinsService: CoinsService) {
   }

  ngOnInit(): void {
    this.coinsService.getCoins()
    .subscribe((res:Coin[]) => {
      this.coins = res;
    });
  }

}
