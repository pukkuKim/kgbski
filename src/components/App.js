import "../css/App.css";
import Nav from "./Nav";
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import axios from "axios";
import Lesson from "./Lesson";
import ContactForm from "./ContactForm";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function App() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(process.env.REACT_APP_GOOGLE_CLOUD_FUNCTION_URL);
				const response = await axios.get(
					process.env.REACT_APP_GOOGLE_CLOUD_FUNCTION_URL
				);
				console.log(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadFull(engine);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};

	return (
		<div className="App">
			<div>
				<Particles
					id="tsparticles"
					url="particlesjs-config.json"
					particlesLoaded={particlesLoaded}
				/>
			</div>

			<header id="navbar">
				<Nav />
			</header>
			<section id="lesson_section">
				<Lesson />
			</section>
			<section id="contact_form_section">
				<ContactForm />
			</section>
			<section id="gallery_section">
				<Gallery />
			</section>
			<section id="contact_section">
				<ContactUs />
			</section>
			<section id="footer_section">
				<Footer />
			</section>
		</div>
	);
}

export default App;
