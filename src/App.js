import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

function App() {
	const [input, setInput] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFiltered] = useState(monsters);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((resp) => resp.json())
			.then((data) => setMonsters(data));
	}, []);

	useEffect(() => {
		let filtered = input
			? monsters.filter((monster) => monster.name.toLowerCase().includes(input))
			: monsters;
		setFiltered(filtered);
	}, [input, monsters]);

	const onSearchChange = (e) => {
		setInput(() => e.target.value.toLowerCase());
	};

	return (
		<div className="App">
			<h1 className="app-title">Monster's rolodex</h1>

			<SearchBox
				handleChange={onSearchChange}
				placeholder="Search monsters"
				className="search-box"
				value={input}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
}

/*
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
*/
export default App;
