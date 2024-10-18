import "../css/ImageCard.css";

function ImageCard(props) {
	return (
		<div className="image-card">
			<img src={props.data} />
		</div>
	);
}

export default ImageCard;
