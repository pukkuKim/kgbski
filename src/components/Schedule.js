function Schedule() {
	return (
		<div className="container">
			<div className="schedule">
				<div className="centered">
					<h3 className="title">용평</h3>
					<table className="table">
						<thead className="thead">
							<tr>
								<th className="th">교시</th>
								<th className="th">시간</th>
							</tr>
						</thead>
						<tbody>
							{generateScheduleRows([
								{ period: "1교시", time: "9:00 - 11:00" },
								{ period: "2교시", time: "11:00 - 13:00" },
								{ period: "3교시", time: "13:00 - 15:00" },
								{ period: "4교시", time: "15:00 - 17:00" },
								{ period: "5교시", time: "19:00 - 21:00" },
							])}
						</tbody>
					</table>
				</div>

				<div className="centered">
					<h3 className="title">알펜시아</h3>
					<table className="table">
						<thead className="thead">
							<tr>
								<th className="th">교시</th>
								<th className="th">시간</th>
							</tr>
						</thead>
						<tbody>
							{generateScheduleRows([
								{ period: "1교시", time: "8:30 - 10:30" },
								{ period: "2교시", time: "10:30 - 12:30" },
								{ period: "3교시", time: "12:30 - 14:30" },
								{ period: "4교시", time: "14:30 - 16:30" },
								{ period: "5교시", time: "18:30 - 20:30" },
							])}
						</tbody>
					</table>
				</div>
			</div>
			<div className="info">
				2시간 강습과 4시간 강습이 있으며, <br />
				2시간 강습의 경우 하나의 교시를, 4시간 강습의 경우 두개의 교시를
				선택해주세요. <br />
				강사의 다른 강습 시간 사정상 원하는 시간대에 강습이 불가할 수
				있습니다.
			</div>
		</div>
	);
}

const generateScheduleRows = (schedules) => {
	return schedules.map(({ period, time }) => (
		<tr key={period}>
			<td className="td">{period}</td>
			<td className="td">{time}</td>
		</tr>
	));
};

export default Schedule;
