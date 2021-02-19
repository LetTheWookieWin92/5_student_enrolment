import React, { Component } from "react";
import { getStudent } from "../services/studentService";

// CSS
import styles from "./css/styles.module.css";
import headingStyles from "./css/headingStyles.module.css";

class StudentSearch extends Component {
	state = {
		searchValue: "",
	};

	updateSearchValue = (searchValue) => {
		this.setState({ searchValue });
	};

	searchStudents(sid) {
		console.log(sid);
	}

	render() {
		const { searchValue } = this.state;

		return (
			<React.Fragment>
				<h1 className={headingStyles.pageTitle}>Search</h1>
				<input
					id="studentSearchBox"
					type="text"
					placeholder="Search.."
					onChangeText={this.updateSearchValue}
					value={searchValue}
				/>
				<button
					className="btn btn-info btn-sm"
					onClick={() => this.searchStudents(this.state.studentSearchBox.value)}
				>
					Search
				</button>
			</React.Fragment>
		);
	}
}

export default StudentSearch;
