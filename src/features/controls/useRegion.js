import { useDispatch, useSelector } from "react-redux";
import { selectRegion, setRegion } from './controlsSlice';


export const useRegion = () => {
	const dispath = useDispatch();
	const region = useSelector(selectRegion);
	const handleRegion = (region) => {
		dispath(setRegion(region?.value || ""));
	};

	return [region, handleRegion];
};
