import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin } from '../model/coin';
import { CoinsService } from '../services/coins.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  coin!: Coin;

  constructor(private activatedRoute: ActivatedRoute, private coinsService: CoinsService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id') as string;
      this.coinsService.getCoinById(id).subscribe((res: Coin) => {
        this.coin = res;
      })
    });
  }

}
