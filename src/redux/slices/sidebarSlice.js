import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setOpenSidebar: state => {
      state.isSidebarOpen = true;
    },
    setCloseSidebar: state => {
      state.isSidebarOpen = false;
    },
  },
});

export default sidebarSlice.reducer;
export const { setOpenSidebar, setCloseSidebar } = sidebarSlice.actions;
export const selectIsSidebarOpen = state => state.sidebar.isSidebarOpen;
