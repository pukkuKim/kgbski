import "../css/Gallery.css";
import ImageCard from "./ImageCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

function Gallery() {
	const [isMobileView, setIsMobileView] = useState(false);
	const [imageUrls, setImageUrls] = useState([]);

	const handleResize = () => {
		setIsMobileView(window.innerWidth <= 768 ? true : false);
	};

	useEffect(() => {
		setIsMobileView(window.innerWidth <= 768 ? true : false);
		window.addEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const baseUrl = "https://storage.googleapis.com/kgbski/";
		const urls = Array.from(
			{ length: 7 },
			(_, i) => `${baseUrl}${i + 1}.jpeg`
		);
		setImageUrls(urls);
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: isMobileView ? 1 : 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		pauseOnHover: true,
	};

	return (
		<div className="gallery">
			<h2 style={{ paddingBottom: isMobileView ? "0" : "1.5rem" }}>
				갤러리
			</h2>
			<Slider {...settings}>
				{imageUrls.map((url, index) => (
					<ImageCard key={index} data={url} />
				))}
			</Slider>
		</div>
	);
}

export default Gallery;
