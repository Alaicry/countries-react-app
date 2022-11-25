export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";
export const SET_NEIGHBOURS = "@@details/SET_NEIGHBOURS";

const setLoading = () => ({
	type: SET_LOADING,
});

const setError = (err) => ({
	type: SET_ERROR,
	payload: err,
});

const setCoutry = (country) => ({
	type: SET_COUNTRY,
	payload: country,
});

const setNeightbours = (countries) => ({
	type: SET_NEIGHBOURS,
	payload: countries,
});

export const clearDetails = () => ({
	type: CLEAR_DETAILS,
});

export const loadCountryByName =
	(name) =>
	(dispatch, _, { client, api }) => {
		dispatch(setLoading());
		client
			.get(api.searchByCountry(name))
			.then(({ data }) => dispatch(setCoutry(data[0])))
			.catch((err) => dispatch(setError(err.message)));
	};

export const loadingNeighboursByBorder =
	(borders) =>
	(dispatch, _, { client, api }) => {
		client
			.get(api.filterByCode(borders))
			.then(({ data }) => dispatch(setNeightbours(data.map((c) => c.name))))
			.catch(console.error);
	};
