import "./App.css";

import Home from "./components/home";

// CSS
import headingStyles from "./components/css/headingStyles.module.css";
import styles from "./components/css/styles.module.css";

function App() {
	return (
		<main className="container">
			<Home />
		</main>
	);
}

export default App;

/*

<div class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						Student Enrolment Database
					</a>
				</div>
			</div>

			*/
