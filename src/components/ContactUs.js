import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faComment,
	faPhone,
	faEnvelope,
} from "@fortawesome/fontawesome-free-solid";
import "../css/ContactUs.css";

function ContactUs() {
	return (
		<div className="contact">
			<h2 style={{ paddingBottom: "1.5rem" }}>연락처</h2>
			<p>
				<FontAwesomeIcon
					icon={faPhone}
					style={{ marginRight: "5px" }}
				/>
				<a href="tel:+821052071397" className="info--link">
					+82-10-5207-1397
				</a>
			</p>
			<p>
				<FontAwesomeIcon
					icon={faComment}
					style={{ marginRight: "5px" }}
				/>
				dkgb1004
			</p>
			<p>
				<FontAwesomeIcon
					icon={faEnvelope}
					style={{ marginRight: "5px" }}
				/>
				<a href="mailto:kgb_winter@naver.com" className="info--link">
					kgb_winter@naver.com
				</a>
			</p>
		</div>
	);
}

export default ContactUs;
