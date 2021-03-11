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
				<h1 className={headingStyles.pageTitle}>Enrolment Interface</h1>

				{this.state.interfaceMode == "none" && (
					<div>
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
					</div>
				)}
				{this.state.interfaceMode == "classes" && (
					<div>
						<button
							className="btn btn-info btn-sm homeButton"
							onClick={() => this.switchState("search")}
						>
							Student Search
						</button>
						<Classes />
					</div>
				)}
				{this.state.interfaceMode == "search" && (
					<div>
						<button
							className="btn btn-info btn-sm homeButton"
							onClick={() => this.switchState("classes")}
						>
							Class Enrolments
						</button>
						<StudentSearch />
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default Home;
