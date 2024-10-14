import "../css/Hero.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SkiVideo from "../assets/skiing-video.mp4";

function Hero() {
	const [startAnimation, setStartAnimation] = useState(false);
	const navigate = useNavigate();

	const handleStartNow = () => {
		setStartAnimation(true);

		setTimeout(() => {
			navigate("/home");
		}, 1000);
	};

	return (
		<div className={`hero ${startAnimation ? "fade-in-effect" : ""}`}>
			<video className="hero__video" src={SkiVideo} autoPlay loop muted />
			<div className="hero__content">
				<div className="hero__content--title">
					KGB SKI에 오신것을 환영합니다.
				</div>
				<div className="hero__content--eng">
					KGB SKI는 용평리조트와 알펜시아리조트에서 수년간의 강습을 해
					온 강사들로 이뤄진 강습팀입니다.
					<br />
					스키와 스노우보드 강습을 초급반, 중급반, 고급반, 자격증반의
					유형별로 진행하고있습니다.
				</div>
			</div>
			<div className="hero__content hero__content--button">
				<NavLink to="/home">
					<button
						className="hero__content--button"
						onClick={handleStartNow}
					>
						ENTER
					</button>
				</NavLink>
			</div>
		</div>
	);
}

export default Hero;
