import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/ContactForm.css";

function ContactForm() {
	const initialValues = {
		name: "",
		email: "",
		phone: "",
		place: "",
		length: "",
		lessonType: "",
		multiSelect: [],
		date: "",
	};

	const validationSchema = Yup.object().shape({
		place: Yup.string().required("장소를 선택해주세요"),
		length: Yup.string().required("강습 길이를 선택해주세요"),
		lessonType: Yup.string().required("강습 타입을 선택해주세요"),
		multiSelect: Yup.array().when("length", {
			is: (length) => length === "option1",
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
					is: (length) => length === "option2",
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
		date: Yup.date().required("강습 날짜를 선택해주세요").nullable(),
		name: Yup.string().required("성함을 기입해주세요"),
		phone: Yup.string().required("전화번호를 기입해주세요"),
		email: Yup.string()
			.email("정확한 이메일을 기입해주세요")
			.required("이메일 주소를 기입해주세요"),
	});

	const handleSubmit = async (values) => {
		const message = `
            Phone: ${values.phone}
            Place: ${values.place}
            Length: ${values.length}
            Lesson Type: ${values.lessonType}
            Multi-Select: ${values.multiSelect.join(", ")}
            Date: ${values.date}
        `;

		const payload = {
			name: values.name,
			email: values.email,
			message: message.trim(),
		};

		const response = await fetch(
			"https://formsubmit.co/goldie.kim89@gmail.com",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
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
									<option value="option1">용평</option>
									<option value="option2">알펜시아</option>
								</Field>
							</div>
							<ErrorMessage
								name="place"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label>길이:</label>
								<Field as="select" name="length">
									<option value="">선택하세요</option>
									<option value="option1">2시간 강습</option>
									<option value="option2">4시간 강습</option>
								</Field>
							</div>
							<ErrorMessage
								name="length"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label>개인/그룹:</label>
								<Field as="select" name="lessonType">
									<option value="">선택하세요</option>
									<option value="option1">1:1 강습</option>
									<option value="option2">2:1 강습</option>
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
									<option value="option1">1교시</option>
									<option value="option2">2교시</option>
									<option value="option3">3교시</option>
									<option value="option4">4교시</option>
									<option value="option5">5교시</option>
								</Field>
							</div>
							<ErrorMessage
								name="multiSelect"
								component="div"
								className="error-message"
							/>

							<div className="form-group inline">
								<label>날짜:</label>
								<Field type="date" name="date" />
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
