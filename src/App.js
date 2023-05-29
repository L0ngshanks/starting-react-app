import React from "react";

import styled from "@emotion/styled";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

import PokemonContext from "./PokemonContext";

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
	gid-column-gap: 1rem;
`;

function App() {
	const [filter, setFilter] = React.useState("");
	const [pokemon, setPokemon] = React.useState([]);
	const [selectedItem, setSelectedItemSet] = React.useState("");

	React.useEffect(() => {
		fetch("http://localhost:3000/Pokemon.json")
			.then((resp) => resp.json())
			.then((data) => setPokemon(data));
	}, []);

	return (
		<PokemonContext.Provider value={{ filter, setFilter, pokemon, setPokemon, selectedItem, setSelectedItemSet }}>
			<Container>
				<Title>Pokemon Search</Title>
				<TwoColumnLayout>
					<div>
						<PokemonFilter />
						<PokemonTable />
					</div>
					<div>
						<PokemonInfo />
					</div>
				</TwoColumnLayout>
			</Container>
		</PokemonContext.Provider>
	);
}

export default App;
