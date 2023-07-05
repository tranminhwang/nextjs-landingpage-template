'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/redux-store';

type ReduxProviderType = {
  children: ReactNode;
};

const ReduxProvider = ({ children }: ReduxProviderType) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
