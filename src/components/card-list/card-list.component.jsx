import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
	render() {
		console.log("CardList render");
		const { monsters } = this.props;

		return (
			<div className="card-list">
				{monsters.map((monster) => (
					<Card data={monster} />
				))}
			</div>
		);
	}
}

export default CardList;
