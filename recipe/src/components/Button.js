/** @format */
import PropTypes from "prop-types";
const Button = ({ color, text }) => {
	return (
		<button style={{ backgroundColor: color }} className='bttn'>
			{text}
		</button>
	);
};
/* Button.defaultProps={
    color: 
}
 */
export default Button;
