import React from "react";

import PropTypes from "prop-types";
import PokemonType from "../PokemonType";
import Button from "@mui/material/Button";

const PokemonRow = ({ pokemon, onSelect }) => {
	return (
		<tr key={pokemon.id}>
			<td>{pokemon.name.english}</td>
			<td>{pokemon.type.join(", ")}</td>
			<td>
				<Button variant='outlined' onClick={() => onSelect(pokemon)}>
					Select!
				</Button>
			</td>
		</tr>
	);
};

PokemonRow.propTypes = {
	pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRow;
