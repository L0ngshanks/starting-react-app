import React from "react";

import styled from "@emotion/styled";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

import PokemonContext from "./PokemonContext";

const pokemonReducer = (state, { type, payload }) => {
	switch (type) {
		case "SET_FILTER":
			return {
				...state,
				filter: payload,
			};
		case "SET_POKEMON":
			return {
				...state,
				pokemon: payload,
			};
		case "SET_SELECTED_POKEMON":
			return {
				...state,
				selectedPokemon: payload,
			};
		default:
			throw new Error("No action");
	}
};

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top" 1rem;
`;

const Title = styled.h1`
	text-align: center;
`;

const TwoColumnLayout = styled.div`
	display: grid;
	grid-template-columns: 80% 20%;
	column-gap: 1rem;
	width: 100%;
`;

const Columns = styled.div`
	width: 100%;
`;

function App() {
	const [state, dispatch] = React.useReducer(pokemonReducer, {
		pokemon: [],
		filter: "",
		selectedPokemon: null,
	});

	React.useEffect(() => {
		fetch("http://localhost:3000/Pokemon.json")
			.then((resp) => resp.json())
			.then((payload) =>
				dispatch({
					type: "SET_POKEMON",
					payload,
				})
			);
	}, []);

	if (!state.pokemon) {
		return <div>Loading Data</div>;
	}

	return (
		<PokemonContext.Provider value={{ state, dispatch }}>
			<Container>
				<Title>Pokemon Search</Title>
				<TwoColumnLayout>
					<Columns>
						<PokemonFilter />
						<PokemonTable />
					</Columns>
					<Columns>
						<PokemonInfo />
					</Columns>
				</TwoColumnLayout>
			</Container>
		</PokemonContext.Provider>
	);
}

export default App;
