import Card from "../card/card.component";
import "./card-list.styles.css";

function CardList({ monsters }) {
	return (
		<div className="card-list">
			{monsters.map((monster) => (
				<Card key={monster.id} data={monster} />
			))}
		</div>
	);
}

export default CardList;
