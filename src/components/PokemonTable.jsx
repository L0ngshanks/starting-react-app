import React from "react";

import styled from "@emotion/styled";

import PokemonRow from "./PokemonRow";
import { useSelector, useDispatch } from "react-redux";

const TableHeader = styled.th`
	text-align: left;
	font-size: large;
`;

const PokemonTable = () => {
	const dispatch = useDispatch();
	const pokemon = useSelector((state) => state.pokemon);
	const filter = useSelector((state) => state.filter);

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
