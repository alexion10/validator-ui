import { configureStore } from '@reduxjs/toolkit';

import profileReducer from '../components/profile/profile.reducer';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});