import React, { Component } from "react";
import { getStudents } from "../services/studentService";

// Components
import StudentProfile from "./studentProfile";
import Classes from "./classes";

//Services
import { getClasses } from "../services/classService";

// CSS
import styles from "./css/styles.module.css";
import headingStyles from "./css/headingStyles.module.css";
import formStyles from "./css/formStyles.module.css";

class StudentSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: "",
			searchStatus: "idle",
			students: getStudents(),
			classes: getClasses(),
			searchResults: [],
			currentProfile: null,

			// Contains all error messages
			errors: {
				sid: "",
			},
		};

		// 'this' is out of scope of deleteEnrolment, until it is bound.
		this.deleteEnrolment = this.deleteEnrolment.bind(this);
	}

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

	resetSearch = () => {
		let searchStatus = "idle";
		this.setState({ searchStatus, searchResults: [], currentProfile: null });
	};

	openStudentProfile(student) {
		let searchStatus = "profile";
		this.setState({ searchStatus, currentProfile: student });
	}

	/* Deletes a class from student enrolments using class id. Called in student profile */
	deleteEnrolment(student, classID) {
		let studentsCurrent = this.state.students;

		// Get student
		let targetStudentArr = studentsCurrent.filter((s) => s._id === student);

		// Remove enrolment
		let targetStudentEnrolments = targetStudentArr[0].enrolments.filter(
			(e) => e !== classID
		);

		targetStudentArr[0].enrolments = targetStudentEnrolments;
		studentsCurrent[studentsCurrent.indexOf(targetStudentArr[0])] =
			targetStudentArr[0];

		// Get class
		let classesCurrent = this.state.classes;
		let targetClassesArr = classesCurrent.filter((c) => c._id === classID);
		// Remove enrolment
		let targetClassEnrolments = targetClassesArr[0].enrolments.filter(
			(e) => e !== student
		);
		targetClassesArr[0].enrolments = targetClassEnrolments;
		classesCurrent[classesCurrent.indexOf(targetClassesArr[0])] =
			targetClassesArr[0];

		this.setState({ students: studentsCurrent, classes: classesCurrent });
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
												onClick={() => this.openStudentProfile(searchResult)}
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
		} else if (this.state.searchStatus == "profile") {
			return (
				<React.Fragment>
					<StudentProfile
						student={this.state.currentProfile}
						onBackPress={this.resetSearch}
						onDeleteEnrolment={this.deleteEnrolment}
					/>
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
