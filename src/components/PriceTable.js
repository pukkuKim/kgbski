function PriceTable() {
	return (
		<div className="container">
			<h3 className="title">강습 가격표</h3>
			<table className="table">
				<thead className="thead">
					<tr>
						<th className="th"></th>
						<th className="th centered">1:1</th>
						<th className="th centered">2:1</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="th">2시간</td>
						<td className="td centered">200,000</td>
						<td className="td centered">250,000</td>
					</tr>
					<tr>
						<td className="th">4시간</td>
						<td className="td centered">350,000</td>
						<td className="td centered">400,000</td>
					</tr>
				</tbody>
			</table>
			<p>장비 렌탈이 필요하신 경우 문의바랍니다.</p>
		</div>
	);
}

export default PriceTable;
