import React, { Component } from "react";
import { getStudents } from "../services/studentService";

// CSS
import styles from "./css/styles.module.css";
import headingStyles from "./css/headingStyles.module.css";
import formStyles from "./css/formStyles.module.css";

class StudentSearch extends Component {
	state = {
		searchValue: "",
		searchStatus: "idle",
		students: getStudents(),
		searchResults: [],

		// Contains all error messages
		errors: {
			sid: "",
		},
	};

	//Called when the input field changes
	updateSearchValue = (searchValue) => {
		this.setState({ searchValue });

		//Check for errors
		let errors = this.state.errors;

		//SID
		if (searchValue.length == 9) {
			//Do nothing
			errors.sid = "";
			this.setState({ errors });
		}
		//Otherwise, add sid error message
		else {
			errors.sid = "SID must be 9 characters long";
			this.setState({ errors });
		}
	};

	//Called when the search button is pressed
	searchStudents(sid) {
		let searchStatus = "";
		if (this.state.errors.sid.length == 0) {
			searchStatus = "results";

			// Filters array for sid
			const filteredSearch = this.state.students.filter(
				(student) => student.sid == sid
			);

			this.setState({ searchStatus, searchResults: filteredSearch });
		} else {
			searchStatus = "idle";
			this.setState({ searchStatus, searchResults: [] });
		}
	}

	resetSearch() {
		let searchStatus = "idle";
		this.setState({ searchStatus, searchResults: [] });
	}

	render() {
		if (this.state.searchStatus == "results") {
			return (
				<React.Fragment>
					<h1 className={headingStyles.pageTitle}>Results</h1>
					<p className={styles.feedbackPara}>
						{this.state.searchResults.length} records found.
					</p>
					<button
						className="btn btn-info btn-sm fBtn"
						onClick={() => this.resetSearch()}
					>
						Back to search
					</button>
					{this.state.searchResults.length > 0 && (
						<table className={styles.GreyTable}>
							<thead className={styles.GreyTableHeader}>
								<tr>
									<th className={styles.GreyTableText}>SID</th>
									<th className={styles.GreyTableText}>Name</th>
									<th className={styles.GreyTableText}>Profile</th>
								</tr>
							</thead>
							<tbody>
								{this.state.searchResults.map((searchResult) => (
									<tr className={styles.GreyTableRow} key={searchResult._id}>
										<td className={styles.GreyTableText}>{searchResult.sid}</td>
										<td className={styles.GreyTableText}>
											{searchResult.name}
										</td>
										<td className={styles.GreyTableButtonTD}>
											<button
												className="btn btn-info btn-sm"
												onClick={() => this.handleOpenClassList(searchResult)}
											>
												Open
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<h1 className={headingStyles.pageTitle}>Search</h1>
					<input
						id="studentSearchBox"
						type="text"
						placeholder="Search.."
						onChange={(event) => this.updateSearchValue(event.target.value)}
					/>
					<button
						className="btn btn-info btn-sm"
						onClick={() => this.searchStudents(this.state.searchValue)}
					>
						Search
					</button>
					{this.state.errors.sid.length > 0 && (
						<p className={formStyles.errorMessagetest}>
							{this.state.errors.sid}
						</p>
					)}
				</React.Fragment>
			);
		}
	}
}

export default StudentSearch;
