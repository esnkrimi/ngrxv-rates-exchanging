import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { stateTypes } from './types';

export const actions = createActionGroup({
  source: 'personFtr',
  events: {
    'start fetch coins': props<{ coin: string }>(),
    'finish fetch coins': props<{ price: string }>(),
    'fetch price start': props<{ coin: string }>(),
    'fetch price finish': props<{ price: string }>(),
  },
});
