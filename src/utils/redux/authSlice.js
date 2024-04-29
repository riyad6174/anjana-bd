import { createSlice } from '@reduxjs/toolkit';

// Check if localStorage is available (client-side)
const localStorageAvailable =
  typeof window !== 'undefined' && window.localStorage;

const initialState = {
  isLoggedIn: localStorageAvailable
    ? localStorage.getItem('isLoggedIn') === 'true'
    : false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      if (localStorageAvailable) {
        localStorage.setItem('isLoggedIn', true); // Save to localStorage
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      if (localStorageAvailable) {
        localStorage.removeItem('isLoggedIn'); // Remove from localStorage
        // Redirect to homepage
        window.location.href = '/login';
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
