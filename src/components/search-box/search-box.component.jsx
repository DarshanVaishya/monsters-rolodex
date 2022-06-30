import "./search-box.styles.css";

function SearchBox({ className, placeholder, handleChange, value }) {
	return (
		<input
			className={className}
			type="search"
			placeholder={placeholder}
			onChange={handleChange}
			value={value}
		/>
	);
}

export default SearchBox;
