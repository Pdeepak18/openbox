import "./profile.scss";
import avatar from "../vendor/vendor-images/image-rita.png"

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img  className="pimg" src={avatar} alt={props.name} />
			</header>
			<h1 className="bold-text">
				{props.name} <span className="normal-text">{props.age}</span>
			</h1>
			<h2 className="normal-text">{props.storeName}</h2>
			<div className="social-container">
				<div className="followers">
					<h1 className="bold-text">{props.dateRegistered}</h1>
					<h2 className="smaller-text">Date Registered	</h2>
				</div>
				<div className="likes">
					<h1 className="bold-text">{props.productsSold}</h1>
					<h2 className="smaller-text">Products Sold</h2>
				</div>
				<div className="photos">
					<h1 className="bold-text">{props.rating}</h1>
					<h2 className="smaller-text">Rating</h2>
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
