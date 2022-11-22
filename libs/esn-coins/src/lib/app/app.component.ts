import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from './+state/actions';
import { selectCoin, selectImg, selectPrice } from './+state/selects';

@Component({
  selector: 'nx-esn-coin',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  values: any;
  finish: any;
  price: any;
  coinSet = ['BTC', 'DOGE', 'ETH', 'XRP', 'SHIB', 'ZEC', 'BNB'];
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.select();
  }
  fetchPrice(coin: string) {
    this.store.dispatch(actions.fetchPriceStart({ coin }));
  }
  select() {
    this.store.select(selectCoin).subscribe((d) => {
      this.values = d;
    });

    this.store.select(selectImg).subscribe((d) => {
      this.finish = d;
    });
    this.store.select(selectPrice).subscribe((d) => {
      this.price = d;
    });
  }
  dispatch(coin = 'BTC') {
    this.finish = 'https://i.stack.imgur.com/8puiO.gif';
    this.store.dispatch(actions.startFetchCoins({ coin }));
    this.fetchPrice(coin);
  }
}
