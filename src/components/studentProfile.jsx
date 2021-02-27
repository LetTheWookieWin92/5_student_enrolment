import React, { Component } from "react";

//Services
import { getClasses } from "../services/classService";

// CSS
import styles from "./css/styles.module.css";
import headingStyles from "./css/headingStyles.module.css";

class StudentProfile extends Component {
	state = {
		student: this.props.student,
		classes: getClasses(),
	};

	lookUpClass(studentEnrolments) {
		{
			/*need to return the class object for each enrolment to obtain code and name*/
		}
	}

	render() {
		return (
			<React.Fragment>
				<h1 className={headingStyles.pageTitle}>{this.state.student.name}</h1>
				<p>
					<b>Student ID:</b> {this.state.student.sid}
				</p>

				<h4 className={headingStyles.pageTitle}>Enrolment</h4>

				<p className={styles.feedbackPara}>
					{this.state.student.enrolments.length} records found.
				</p>

				{/*Calls the reset search function in parent component studentSearch*/}
				<button
					className="btn btn-info btn-sm fBtn"
					onClick={this.props.onBackPress}
				>
					Back to search
				</button>

				{this.state.student.enrolments.length > 0 && (
					<table className={styles.GreyTable}>
						<thead className={styles.GreyTableHeader}>
							<tr>
								<th className={styles.GreyTableText}>Code</th>
								<th className={styles.GreyTableText}>Name</th>
							</tr>
						</thead>
						<tbody>
							{/* Use look up function above to get the name/code of each enrolment */}
							{this.state.student.enrolments.map((enrolmentItem) => (
								<tr className={styles.GreyTableRow} key={enrolmentItem._id}>
									<td className={styles.GreyTableText}>{enrolmentItem.code}</td>
									<td className={styles.GreyTableText}>{enrolmentItem.name}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</React.Fragment>
		);
	}
}

export default StudentProfile;

/*

// Filters array for sid
			const filteredSearch = this.state.students.filter(
				(student) => student.sid == sid
			);



                */
