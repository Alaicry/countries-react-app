import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "./controlsSlice";

export const useSearch = () => {
	const dispath = useDispatch();
	const search = useSelector(selectSearch);
	const handleSearch = (e) => {
		dispath(setSearch(e.target.value));
	};

	return [search, handleSearch];
};
