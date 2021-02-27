import React, { Component } from "react";

// Components
import Classes from "./classes";
import StudentSearch from "./studentSearch";

// CSS
import headingStyles from "./css/headingStyles.module.css";

class Home extends Component {
	state = {
		interfaceMode: "none",
	};

	// Changes between search and class interfaces
	switchState(mode) {
		this.setState({ interfaceMode: mode });
	}

	render() {
		return (
			<React.Fragment>
				<h1 className={headingStyles.pageTitle}>Home</h1>
				<button
					className="btn btn-info btn-sm homeButton"
					onClick={() => this.switchState("search")}
				>
					Student Search
				</button>
				&nbsp;
				<button
					className="btn btn-info btn-sm homeButton"
					onClick={() => this.switchState("classes")}
				>
					Class Enrolments
				</button>
				{this.state.interfaceMode == "classes" && <Classes />}
				{this.state.interfaceMode == "search" && <StudentSearch />}
			</React.Fragment>
		);
	}
}

export default Home;
