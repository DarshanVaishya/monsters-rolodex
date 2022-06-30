import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
	state = {
		monsters: [],
		input: "",
	};

	async componentDidMount() {
		const resp = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await resp.json();
		this.setState({ monsters: data });
	}

	onSearchChange = (e) => {
		this.setState(() => ({ input: e.target.value.toLowerCase() }));
	};

	render() {
		const { input, monsters } = this.state;

		let filteredMonsters = input
			? monsters.filter((monster) => monster.name.toLowerCase().includes(input))
			: monsters;

		return (
			<div className="App">
				<h1 className="app-title">Monster's rolodex</h1>

				<SearchBox
					handleChange={this.onSearchChange}
					placeholder="Search monsters"
					className="search-box"
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
