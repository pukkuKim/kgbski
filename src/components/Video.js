import "../css/Video.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

function Video() {
    const [isMobileView, setIsMobileView] = useState(false);
    const [videoUrls, setVideoUrls] = useState([]);

    const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768);
    };

    useEffect(() => {
        setIsMobileView(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const baseUrl = "https://storage.googleapis.com/kgbski/";
        const urls = Array.from(
            { length: 10 },
            (_, i) => `${baseUrl}${i}.mp4`
        );
        setVideoUrls(urls);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: isMobileView ? 1 : 2,
        slidesToScroll: 1,
        pauseOnHover: true,
    };

    return (
        <div className="video">
            <h2 style={{ paddingBottom: isMobileView ? "0" : "1.5rem" }}>
                비디오
            </h2>
            <Slider {...settings}>
                {videoUrls.map((url, index) => (
                    <div key={index} className="video-container">
                        <video controls src={url} className="video-element" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Video;
