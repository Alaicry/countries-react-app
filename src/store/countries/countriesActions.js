export const SET_COUNTRIES = "@@country/SET_COUNTRIES";
export const SET_LOADING = "@@country/SET_LOADING";
export const SET_ERROR = "@@country/ERROR";

const setCountries = (countries) => ({
	type: SET_COUNTRIES,
	payload: countries,
});

const setLoadind = () => ({
	type: SET_LOADING,
});

const setError = (err) => ({
	type: SET_ERROR,
	payload: err,
});

export const loadCountries = () => (dispatch, _, { client, api }) => {
		dispatch(setLoadind());
		client
			.get(api.ALL_COUNTRIES)
			.then(({ data }) => dispatch(setCountries(data)))
			.catch((err) => dispatch(setError(err.message)));
	};
