import "./Popover.scss";

const Popover = ({ step, header, description }) => {
	return (
		<div className="popover">
            <div className="popover__triangle-container">
                <div className="popover__triangle"></div>
            </div>
			<div className="popover__card">
				<div className="popover__card-nav">
					<p className="popover__step">Step 2 of 15</p>
					<p className="popover__closeButton">X</p>
				</div>
				<div className="popover__card-heading">
					<h3 className="popover__card-title">View the status of your books</h3>
				</div>
				<div className="popover__body">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
					porro exercitationem repellendus ut, expedita optio eius recusandae
				</div>
				<div className="popover__footer">
					<p className="popover__footer--left">
						<p className="popover__footer-button-prev">Previous</p>
					</p>
					<p className="popover__footer--right">
						<button className="popover__footer-button-next">Next</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Popover;
