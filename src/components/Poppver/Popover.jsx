import "./Popover.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Popover = ({ number, step, header, description, className, open1, set1Open ,set2Open}) => {
	const navigate = useNavigate();

	// if (!open1) {
	// 	return null;
	// }

	// const [newClassName, setClassName] = useState(className);
	// if (!open1) {
	// 	return null;
	// }

	const nextHandler=()=>{
		if(number===1){
			set1Open(false);
			set2Open(true);
		}
	}
	return (
		<div className={`popover ${className}`}>
			<div className="popover__triangle-container">
				<div className="popover__triangle"></div>
			</div>
			<div className="popover__card">
				<div className="popover__card-nav">
					<p className="popover__step">{step}</p>
					<p
						className="popover__closeButton"
						onClick={(e) => {
							set1Open(false);
							// setOpen(false);
							// setClassName(`${className} hide`);
							navigate(`/`);
						}}
					>
						X
					</p>
				</div>
				<div className="popover__card-heading">
					<h3 className="popover__card-title">{header}</h3>
				</div>
				<div className="popover__body">{description}</div>
				<div className="popover__footer">
					<p className="popover__footer--left">
						<p className="popover__footer-button-prev">Previous</p>
					</p>
					<p className="popover__footer--right">
					<button onClick={nextHandler}className="popover__footer-button-next">Next</button>
						{/* <button */}
							{/* onClick={() => { */}
								{/* // closeHandler(); */}
							{/* }} */}
							{/* className="popover__footer-button-next" */}
						{/* > */}
							{/* Next */}
						{/* </button> */}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Popover;
