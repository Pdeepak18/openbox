import "./profile.scss";
import avatar from "../../images/Dummyplaceholder.png"

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img className="pimg" src={avatar} alt={props.name} />
			</header>
			<h1 className="bold-text">
				{props.name} <span className="normal-text">{props.age}</span>
			</h1>
			<div className="social-container">
				<div className="likes">
					<h1 className="bold-text">{props.productsBuyed}</h1>
					<h2 className="smaller-text"> <strong>Products Buyed</strong> </h2>
					</div>
				</div>
		</div>
	);
}

export default ProfileCard;
