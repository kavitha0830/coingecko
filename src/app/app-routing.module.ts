import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinComponent } from './coin/coin.component';
import { CoinsComponent } from './coins/coins.component';

const routes: Routes = [
  { path: 'coins', component: CoinsComponent },
  { path: 'coin/:id', component: CoinComponent },
  { path: '', component: CoinsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
