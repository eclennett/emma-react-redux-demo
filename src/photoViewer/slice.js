import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	index: null,
	photos: [],
	fetching: false,
	fetchError: null,
};

export const photoViewerSlice = createSlice({
	name: "photoViewer",
	initialState,
	reducers: {
		next: (state) => {
			state.index++;
		},
		fetchPhotos: (state) => {
			state.fetching = true;
		},
		fetchPhotosSuccess: (state, action) => {
			state.photos = action.payload;
			state.fetching = false;
			state.index = 0;
		},
		fetchPhotosError: (state, action) => {
			state.fetching = false;
			state.fetchError = action.payload;
		},
	},
});

export const { next, fetchPhotos, fetchPhotosSuccess, fetchPhotosError } =
	photoViewerSlice.actions;

export default photoViewerSlice.reducer;
