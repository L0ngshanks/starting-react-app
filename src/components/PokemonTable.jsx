import React, { useContext } from "react";

import styled from "@emotion/styled";

import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

const TableHeader = styled.th`
	text-align: left;
	font-size: large;
`;

const PokemonTable = () => {
	const { pokemon, filter, setSelectedItemSet } = useContext(PokemonContext);
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
							<PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon) => setSelectedItemSet(pokemon)} />
						);
					})}
			</tbody>
		</table>
	);
};

export default PokemonTable;
