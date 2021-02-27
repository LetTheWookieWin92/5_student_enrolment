import React, { Component } from "react";
import { getStudent } from "../services/studentService";

// CSS
import styles from "./css/styles.module.css";
import headingStyles from "./css/headingStyles.module.css";

class SearchResults extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<h1 className={headingStyles.pageTitle}>Results</h1>
			</React.Fragment>
		);
	}
}

export default SearchResults;
