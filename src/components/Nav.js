import { Link } from "react-scroll";
import "../css/Nav.css";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

function Nav() {
	const [showLinks, setShowLinks] = useState(false);

	const logo = require("../assets/kgb-logo.jpeg");

	const navItems = [
		{ to: "lesson_section", name: "강습" },
		{ to: "contact_form_section", name: "문의하기" },
		{ to: "gallery_section", name: "갤러리" },
		{ to: "video_section", name: "비디오" },
		// { to: "threadlist_section", name: "게시판" },
		{ to: "contact_section", name: "연락처" },
	];

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	const hideLinks = () => {
		setShowLinks(false);
	};

	return (
		<nav className="nav__container__actions">
			<a className="logoContainer" href="/kgbski">
				<img className="logo_image" src={logo} />
			</a>
			<ul className={showLinks ? "links" : "links hide"}>
				{navItems.map((link) => (
					<li key={link.to}>
						<Link
							activeClass="active"
							smooth
							spy
							to={link.to}
							onClick={hideLinks}
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
			<div className="sideBarIcon" onClick={toggleLinks}>
				<IoMenu size={25} />
			</div>
		</nav>
	);
}

export default Nav;
