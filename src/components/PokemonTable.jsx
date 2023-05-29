import React, { useContext } from "react";

import styled from "@emotion/styled";

import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

const TableHeader = styled.th`
	text-align: left;
	font-size: large;
`;

const PokemonTable = () => {
	const {
		state: { filter, pokemon },
		dispatch,
	} = useContext(PokemonContext);

	return (
		<table width={"100%"}>
			<thead>
				<tr>
					<TableHeader>Name</TableHeader>
					<TableHeader>Type</TableHeader>
				</tr>
			</thead>
			<tbody>
				{pokemon
					.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
					.slice(0, 20)
					.map((pokemon) => {
						return (
							<PokemonRow
								key={pokemon.id}
								pokemon={pokemon}
								onSelect={(pokemon) =>
									dispatch({
										type: "SET_SELECTED_POKEMON",
										payload: pokemon,
									})
								}
							/>
						);
					})}
			</tbody>
		</table>
	);
};

export default PokemonTable;
