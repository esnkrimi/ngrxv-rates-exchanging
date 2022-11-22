import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs/operators';
import { apiService } from '../api.service';
import { actions } from './actions';

@Injectable()
export class AuthEffects {
  fetchPrice = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.fetchPriceStart),
      switchMap((d1: any) => {
        return this.ser.Price(d1['coin']).pipe(
          map((d: any) =>
            actions.fetchPriceFinish({
              price: d,
            })
          )
        );
      })
    );
  });

  fetchCoin = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.startFetchCoins),
      switchMap((d1) =>
        this.ser.coinList(d1['coin']).pipe(
          map((d: any) =>
            actions.finishFetchCoins({
              price: d['Data'][d1['coin']]['ImageUrl'],
            })
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private ser: apiService,
    private store: Store
  ) {}
}
