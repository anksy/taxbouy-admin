import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    toastr: {
        open: false,
        type: "",
        message: ""
    },
    modal: {
        open: false,
        modalProps: {}
    }
}

/* application slice */
export const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        toggleLoader: (state, { payload }) => {
            state.loading = payload;
        },
        displayToastMessage: (state, { payload }) => {
            state.toastr = payload;
        },
        displayModal: (state, { payload }) => {
            state.modal = payload;
        }
    }
});

export const { toggleLoader, displayToastMessage, displayModal } = applicationSlice.actions;
export default applicationSlice.reducer;