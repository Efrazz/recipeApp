/** @format */
import PropTypes from "prop-types";

import Button from "./Button";
const Header = (props) => {
	const onClick = () => {
		console.log("click");
	};
	return (
		<header className='header'>
			<h1>{props.title}</h1>

			<Button onClick={onClick} color='green' text='hello' />
		</header>
	);
};
Header.defaultProps = {
	title: "Task traker",
	name: "Ephrem",
};

Header.propTypes = {
	title: PropTypes.string,
};
export default Header;
