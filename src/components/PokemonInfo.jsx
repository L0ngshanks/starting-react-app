import React from "react";

import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import PokemonType from "../PokemonType";

const InfoWrapper = styled.div`
	margin-top: 2.25rem;
`;

const Title = styled.div`
	font-size: large;
	font-weight: bold;
`;

const PokemonInfo = () => {
	const selectedPokemon = useSelector(({ selectedPokemon }) => selectedPokemon);

	return selectedPokemon ? (
		<InfoWrapper>
			<Title>{selectedPokemon.name.english}</Title>
			<table>
				<tbody>
					{Object.keys(selectedPokemon.base).map((key) => (
						<tr key={key}>
							<td>{key}</td>
							<td>{selectedPokemon.base[key]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</InfoWrapper>
	) : null;
};

PokemonInfo.protoTypes = PokemonType;

export default PokemonInfo;
