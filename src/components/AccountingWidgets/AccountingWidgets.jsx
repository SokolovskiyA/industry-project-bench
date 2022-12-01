import "./AccountingWidgets.scss";
import bookkeeping from "../../assets/images/bookkeeping_status.png";
import login from "../../assets/images/login-ish.png";
import ploss from "../../assets/images/ploss.png";
import Popover from "../Poppver/Popover";
import { useState } from "react";

import DialoguePopper from "../DialoguePopper/DialoguePopper";
const AccountingWidgets = ({ setNumber, number }) => {
	const [open, setOpen] = useState(true);

	const closeHandler = () => {
		setOpen(false);
	};
	return (
		<div className="accounting">
			<div className="accounting__container">
				<div className="accounting__bookkeeping">
					<div className="accounting__bookkeeping__top">
						{number === 2 && (
							<Popover
								open={open}
								closeHandler={closeHandler}
								setOpen={setOpen}
								className={"step2"}
								step={"Step 2 of 15"}
								header={"View the Status of Your books"}
								description={
									"See weather your books are complete and are going through a quality check, in progress or require action"
								}
							/>
						)}
						<h3 className="accounting__bookkeeping__heading">
							Bookkeeping Status
						</h3>

						<h4 className="accounting__bookkeeping__heading2">
							SEE OUTSTANDING
						</h4>
					</div>
					<div className="accounting__bookkeeping__bottom">
						<img
							className="accounting__bookkeeping__bottom__book-img"
							src={bookkeeping}
							alt=""
						/>
					</div>
				</div>
				<div className="accounting__tax">
					<img src={login} alt="" />
				</div>
				<div className="accounting__profit-loss">
					<div className="accounting__profit-loss__top">
						<h2 className="accounting__profit-loss__heading">Your Snapshots</h2>
						<hr />
					</div>
					<div className="accounting__profit-loss__img">
						<img src={ploss} alt="" />
					</div>
				</div>
			</div>
			<DialoguePopper />
		</div>
	);
};

export default AccountingWidgets;
