import { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const counterReducers = Object.freeze({
  increment: (state: CounterState) => {
    state.value += 1;
  },
  decrement: (state: CounterState) => {
    state.value -= 1;
  },
  incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
    state.value += action.payload;
  },
});

export default counterReducers;
