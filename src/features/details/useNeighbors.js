import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNeighboursByBorder, selectNeighbours } from "./detailsSlice";

export const useNeighbors = (borders = []) => {
	const dispatch = useDispatch();
	const neighbors = useSelector(selectNeighbours);

	React.useEffect(() => {
		if (borders.length) {
			dispatch(loadNeighboursByBorder(borders));
		}
	}, [borders, dispatch]);

	return neighbors;
};
