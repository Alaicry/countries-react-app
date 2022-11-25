import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countriesActions";

const initialState = {
	status: "idle",
	error: null,
	list: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOADING:
			return {
				...state,
				status: "loading",
				error: null,
			};
		case SET_COUNTRIES:
			return {
				...state,
				status: "received",
				list: payload,
			};
		case SET_ERROR:
			return {
				...state,
				status: "rejected",
				error: payload,
			};
		default:
			return state;
	}
};
