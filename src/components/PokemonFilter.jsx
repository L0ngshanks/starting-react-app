import React from "react";

import styled from "@emotion/styled";

import { useDispatch, useSelector } from "react-redux";

const Input = styled.input`
	width: 100%;
	font-size: large;
	padding: 0.25rem;
	box-sizing: border-box;
`;

const PokemonFilter = () => {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.filter);

	return (
		<Input
			type='text'
			value={filter}
			onChange={(evt) =>
				dispatch({
					type: "SET_FILTER",
					payload: evt.target.value,
				})
			}
		/>
	);
};

export default PokemonFilter;
