import "./Popover.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import close from "../../assets/icons/FABexit.png";
import background from "../../assets/images/card-background.png";
import semiCircle from "../../assets/images/semi-circle.svg";


const Popover = ({
	number,
	step,
	header,
	description,
	className,
	open1,
	setOpen,
	closeHandler,
	setNumber,
	img,
	nav
}) => {
	const navigate = useNavigate();
	const [newClassName, setClassName] = useState(className);
	// if (!open1) {
	// 	return null;
	// }

	const nextHandler = () => {};
	return (
		<div className={`popover ${className}`}>
			<div className="popover__triangle-container">
				<div className="popover__triangle"></div>
			</div>
			<div className="popover__card">
				<div className="popover__card--left">
					<div className="popover__card-nav">
						<p className="popover__step">{step}</p>
					</div>
					<div className="popover__card-heading">
						<h3 className="popover__card-title">{header}</h3>
					</div>
					<div className="popover__body">
						<p>{description}</p>
					</div>
					<div className="popover__footer">
						<p className="popover__footer--left">
							<p className="popover__footer-button-prev">Previous</p>
						</p>
					</div>
				</div>
				<div className="popover__card--right">
					<p
						className="popover__closeButton"
						onClick={(e) => {
							// set1Open(false);
							// setOpen(false);
							// setClassName(`${className} hide`);
							navigate(`/`);
						}}
					>
						<img src={close} alt="" />
					</p>
					<img className={"card-image"} src={img} alt="" />
					<p className="popover__footer--right">
						<button
							onClick={() => {
								setNumber(number + 1);
								nav();
							}}
							className="popover__footer-button-next"
						>
							Next
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Popover;
