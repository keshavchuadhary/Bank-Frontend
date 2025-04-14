import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSpinner: false,
    showDelay: 3000,
    openNavbar: false
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        openSpinner: (state, action) => {
            state.showSpinner = true;
        },
        closeSpinner: (state, action) => {
            state.showSpinner = false;
        },
        toggleNavbar: (state, action) => {
            state.openNavbar = action.payload;
        }
    }
})
export const { openSpinner, closeSpinner, toggleNavbar } = pageSlice.actions;
export const showSpinner = state => state.page.showSpinner;
export const showDelay = state => state.page.showDelay;
export const selectOpenNavbar = (state) => state.page.openNavbar;

export default pageSlice.reducer;