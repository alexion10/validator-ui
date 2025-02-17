import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.laurentiumarian.ro/validator/get/";

const config = {
	headers: {
		"Content-Type": "application/json",
		Authorization: `Token 8f77650c9aaaa47948a824a78f3f140f482da872`,
	},
};

export const getAllJobs = createAsyncThunk(
	"profile/getAllJobs",
	async (company, thunkAPI) => {
		try {
			const response = await axios.post(
				url,
				JSON.stringify({ company: company }),
				config
			);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

const INITIAL_STATE = {
	allJobs: [],
	editModalJob: null,
	loading: false,
	error: null,
	isError: false,
};

const profileReducer = createSlice({
	name: "profile",
	initialState: INITIAL_STATE,
	reducers: {
		reset: (state) => {
			state = INITIAL_STATE;
		},
		setModalJob: (state, action) => {
			state.editModalJob = action.payload;
		},
		clearModalJob: (state) => {
			state.editModalJob = INITIAL_STATE.editModalJob;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllJobs.pending, (state) => {
				state.loading = true;
			})
			.addCase(getAllJobs.fulfilled, (state, action) => {
				state.loading = false;
				state.isError = false;
				state.allJobs = action.payload;
			})
			.addCase(getAllJobs.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.isError = true;
				state.allJobs = [];
			});
	},
});

export const { actions: profileActions } = profileReducer;

export default profileReducer.reducer;
