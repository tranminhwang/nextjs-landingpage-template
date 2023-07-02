import { RootState } from '@/lib/redux-store';
import { createSlice } from '@reduxjs/toolkit';
import counterReducers, { CounterState } from './reducers';

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: counterReducers,
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
