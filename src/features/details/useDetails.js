import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, loadCountryByName, selectDetails } from "./detailsSlice";

export const useDetails = (name) => {
	const details = useSelector(selectDetails);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(loadCountryByName(name));
		return () => {
			dispatch(clearDetails());
		};
	}, [name, dispatch]);

	return details;
};
