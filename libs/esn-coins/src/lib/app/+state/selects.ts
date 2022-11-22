import { createSelector } from '@ngrx/store';
import { ftr } from './reducers';

export const { reducer, selectCoin, selectStatus, selectImg, selectPrice } =
  ftr;
