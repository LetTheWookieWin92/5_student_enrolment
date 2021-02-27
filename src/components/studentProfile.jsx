import React, { Component } from "react";

// CSS
import headingStyles from "./css/headingStyles.module.css";

class StudentProfile extends Component {
	state = {
		student: this.props.student,
	};
	render() {
		return (
			<React.Fragment>
				<h1 className={headingStyles.pageTitle}>Student Profile</h1>
				<p>{this.state.student.name}</p>
			</React.Fragment>
		);
	}
}

export default StudentProfile;
