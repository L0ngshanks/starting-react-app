import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

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

const stateReducer = (
	state = {
		pokemon: [],
		filter: "",
		selectedPokemon: null,
	},
	{ type, payload }
) => {
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
			return state;
	}
};

const store = createStore(stateReducer);

function App() {
	const dispatch = useDispatch();
	const pokemon = useSelector((pokemon) => pokemon);

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

	if (!pokemon) {
		return <div>Loading Data</div>;
	}

	return (
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
	);
}

export default () => (
	<Provider store={store}>
		<App />
	</Provider>
);
