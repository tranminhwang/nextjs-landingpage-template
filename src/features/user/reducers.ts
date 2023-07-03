export interface UserState {
  name: string;
  email: string;
}

const userReducers = Object.freeze({
  setName: (state: UserState, action: { payload: string }) => {
    state.name = action.payload;
  },
});

export default userReducers;
