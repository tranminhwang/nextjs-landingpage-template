import { createSlice } from '@reduxjs/toolkit';
import userReducers, { UserState } from './reducers';
import { RootState } from '@/lib/redux-store';

const initialState: UserState = {
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: userReducers,
});

export const { setName } = userSlice.actions;
export const selectName = (state: RootState) => state.user.name;

export default userSlice.reducer;
