import { createReducer, on, createFeature } from '@ngrx/store';
import { actions } from './actions';

export interface state {
  coin: string;
  status: string;
  img: string;
  price: string;
}

export enum Status {
  INIT = 'FINISH',
}

export const initialState: state = {
  coin: '',
  status: 'START',
  img: 'LOADING....',
  price: '',
};
export const ftr = createFeature({
  name: 'personFtr',
  reducer: createReducer(
    initialState,
    on(actions.startFetchCoins, (state, action) => ({
      ...state,
      coin: action.coin,
    })),
    on(actions.finishFetchCoins, (state, action) => ({
      ...state,
      status: Status.INIT,
      img: 'https://www.cryptocompare.com/' + action.price,
    })),
    on(actions.fetchPriceStart, (state, action) => ({
      ...state,
    })),
    on(actions.fetchPriceFinish, (state, action) => ({
      ...state,
      price: action.price,
    }))
  ),
});
