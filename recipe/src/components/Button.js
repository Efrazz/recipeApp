/** @format */
import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
	return (
		<button onClick={onClick} style={headingStyle} className='bttn'>
			{text}
		</button>
	);
};
Button.defaultProps = {
	color: "green",
	text: "Ephrem",
};

Button.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
};

const headingStyle = {
	color: "red",
	backgroundColor: "yellow",
};
export default Button;
