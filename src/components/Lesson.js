import PriceTable from "./PriceTable.js";
import Schedule from "./Schedule.js";
import "../css/Lesson.css";

function Lesson() {
	return (
		<div className="lesson">
			<h2 style={{ paddingBottom: "1.5rem" }}>강습</h2>
			<p
				className="price__intro--centered"
			>
				KGB SKI는 안전을 최우선으로 하며 자세 교정 및 실력 향상을 목표로
				강습을 진행합니다.
			</p>
			<Schedule />
			<PriceTable />
		</div>
	);
}

export default Lesson;
