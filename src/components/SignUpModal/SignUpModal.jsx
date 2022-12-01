import "./SignUpModal.scss";
import signUp from "../../assets/images/SignUpCard.png";
import { Link } from "react-router-dom";


const Modal = () => {

	return (
		<div className="modal__overlay">
            <div className="modal__body">
                <Link to="https://bench.co/signup-bench-free-month-bookkeeping/">
                <img 
                className="modal__img"
                src={signUp} />
                </Link>
            </div>
        </div>
	);
};

export default Modal;
