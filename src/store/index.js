import axios from "axios";
import * as api from "../config";
import { configureStore } from "@reduxjs/toolkit";
import controlsSlice from "../features/controls/controlsSlice";
import countriesSlice from "../features/countries/countriesSlice";
import detailsSlice from "../features/details/detailsSlice";

const store = configureStore({
	reducer: {
		controls: controlsSlice,
		countries: countriesSlice,
		details: detailsSlice,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
			serializableCheck: false,
		}),
});

export default store;
