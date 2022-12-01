import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./Upload.scss";
import drop from '../../assets/images/drop.png'
import docs from '../../assets/images/docs.png'
import uncat from '../../assets/images/uncat.png'
import DialoguePopper from "../DialoguePopper/DialoguePopper";




const Upload = ()=>{
	return (
		<div className="upload">
			<Sidebar />
			<div className="right-container">
				<DashboardHeader />
				<div className="balance__container">
					<img src={drop} alt="" />
					<img src={uncat} alt="" />
					<img src={docs} alt="" />

				</div>
				<DialoguePopper />
			</div>
		</div>
	);
}



export default Upload;