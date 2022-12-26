import React from "react";
import Button from "../components/Button";
import CountryDetails from "../features/details/CountryDetails";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Details = () => {
	const { name } = useParams();
	const navigate = useNavigate();

	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			<CountryDetails name={name} navigate={navigate} />
		</div>
	);
};

export default Details;
