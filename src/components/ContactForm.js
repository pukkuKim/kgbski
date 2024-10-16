import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/ContactForm.css";

function ContactForm() {
	const initialValues = {
		place: "",
		length: "",
		equipment: "",
		lessonType: "",
		multiSelect: [],
		date: "",
		name: "",
		phone: "",
		email: "",
	};

	const validationSchema = Yup.object().shape({
		place: Yup.string().required("장소를 선택해주세요"),
		length: Yup.string().required("강습시간을 선택해주세요"),
		lessonType: Yup.string().required("강습 타입을 선택해주세요"),
		equipment: Yup.string().required("레슨 장비를 선택해주세요"),
		multiSelect: Yup.array().when("length", {
			is: (length) => length === "2시간",
			then: (schema) =>
				schema
					.length(
						1,
						"2시간 강습을 선택하신 경우 하나의 교시를 선택해주셔야 합니다"
					)
					.required(
						"2시간 강습을 선택하신 경우 하나의 교시를 선택해주셔야 합니다"
					),
			otherwise: (schema) =>
				schema.when("length", {
					is: (length) => length === "4시간",
					then: (schema) =>
						schema
							.length(
								2,
								"4시간 강습을 선택하신 경우 두개의 교시를 선택해주셔야 합니다"
							)
							.required(
								"4시간 강습을 선택하신 경우 두개의 교시를 선택해주셔야 합니다"
							),
				}),
		}),
		date: Yup.date()
			.required("희망 강습날짜를 선택해주세요")
			.nullable()
			.min(new Date(Date.now()), "내일 이후의 날짜를 선택해주세요"),
		name: Yup.string()
			.required("성함을 기입해주세요")
			.max(20, "성함은 20자 이하로 기입해주세요")
			.matches(
				/^[a-zA-Z가-힣\s]+$/,
				"영어 또는 한글만 사용할 수 있습니다"
			),
		phone: Yup.string()
			.required("전화번호를 기입해주세요")
			.matches(
				/^(02\d{7}|[0-9]{3}\d{3,4}\d{4})$/,
				"전화번호 형식이 유효하지 않습니다"
			),
		email: Yup.string()
			.email("정확한 이메일을 기입해주세요")
			.required("이메일 주소를 기입해주세요"),
	});

	const handleSubmit = async (values) => {
		const response = await fetch(
			process.env.REACT_APP_DISCORD_WEBHOOK_URL,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					content: `
                \n
성함: ${values.name}
이메일: ${values.email}
전화번호: ${values.phone}
장소: ${values.place}
강습시간: ${values.length}
스키/보드: ${values.equipment}
개인/그룹: ${values.lessonType}
희망교시: ${values.multiSelect.join(", ")}
희망날짜: ${values.date}
\n
            `,
				}),
			}
		);

		if (response.ok) {
			alert("Form submitted successfully!");
		} else {
			const errorData = await response.json();
			console.error("Submission error:", errorData);
			alert("Form submission failed. Check console for details.");
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{() => (
				<div className="contact-form">
					<h2 style={{ paddingBottom: "1.5rem" }}>문의하기</h2>
					<div className="form-container">
						<Form>
							<div className="form-group inline">
								<label>장소:</label>
								<Field as="select" name="place">
									<option value="">선택하세요</option>
									<option value="용평">용평</option>
									<option value="알펜시아">알펜시아</option>
								</Field>
							</div>
							<ErrorMessage
								name="place"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label>강습시간:</label>
								<Field as="select" name="length">
									<option value="">선택하세요</option>
									<option value="2시간">2시간 강습</option>
									<option value="4시간">4시간 강습</option>
								</Field>
							</div>
							<ErrorMessage
								name="length"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label>스키/보드:</label>
								<Field as="select" name="equipment">
									<option value="">선택하세요</option>
									<option value="스키">스키</option>
									<option value="보드">스노우보드</option>
								</Field>
							</div>
							<ErrorMessage
								name="equipment"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label>개인/그룹:</label>
								<Field as="select" name="lessonType">
									<option value="">선택하세요</option>
									<option value="개인레슨">1:1 강습</option>
									<option value="그룹레슨">2:1 강습</option>
								</Field>
							</div>
							<ErrorMessage
								name="lessonType"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label>
									2시간 강습일 경우 택1,
									<br />
									4시간 강습일 경우 택2
								</label>
								<Field
									as="select"
									name="multiSelect"
									multiple
									className="multiSelect"
								>
									<option value="1교시">1교시</option>
									<option value="2교시">2교시</option>
									<option value="3교시">3교시</option>
									<option value="4교시">4교시</option>
									<option value="5교시">5교시</option>
								</Field>
							</div>
							<ErrorMessage
								name="multiSelect"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label htmlFor="date">날짜:</label>
								<Field
									type="date"
									name="date"
									min={
										new Date(Date.now() + 86400000)
											.toISOString()
											.split("T")[0]
									}
								/>
							</div>
							<ErrorMessage
								name="date"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label>이름:</label>
								<Field type="text" name="name" />
							</div>
							<ErrorMessage
								name="name"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label>연락처:</label>
								<Field type="text" name="phone" />
							</div>
							<ErrorMessage
								name="phone"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label>이메일:</label>
								<Field type="email" name="email" />
							</div>
							<ErrorMessage
								name="email"
								component="div"
								className="error-message"
							/>

							<Field
								type="hidden"
								name="_subject"
								value="KGB SKI - 새로운 문의가 있습니다"
							/>

							<Field
								type="hidden"
								name="_captcha"
								value="false"
							/>

							<button type="submit">전송</button>
						</Form>
					</div>
				</div>
			)}
		</Formik>
	);
}

export default ContactForm;
