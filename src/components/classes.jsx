import React, { Component } from "react";
import { getClasses } from "../services/classService";

// CSS
import styles from "./css/styles.module.css";
import headingStyles from "./css/headingStyles.module.css";

class Classes extends Component {
	state = {
		classes: getClasses(),
		student: this.props.student,
	};
	//updating
	filterOccupiedClasses() {
		/* For each student class, filter out from allClasses*/
		let studentClasses = this.state.student.enrolments;
		let filteredClasses = this.state.classes.slice(0);

		// Create list of all class IDs
		let classIDs = [];
		for (let i = 0; i < filteredClasses.length; i++) {
			classIDs.push(filteredClasses[i]._id);
		}

		// Get index of student classes
		let studentEnrolledInIndexes = [];
		for (let i = 0; i < studentClasses.length; i++) {
			studentEnrolledInIndexes.push(classIDs.indexOf(studentClasses[i]));
		}

		// Remove classes from filtered classes for final list of enrolment options
		for (let i = 0; i < studentEnrolledInIndexes.length; i++) {
			filteredClasses.splice(studentEnrolledInIndexes[i], 1);
		}

		return filteredClasses;
	}

	render() {
		return (
			<React.Fragment>
				<h4 className={headingStyles.pageTitle}>Class Availability</h4>
				<table className={styles.GreyTable}>
					<thead className={styles.GreyTableHeader}>
						<tr>
							<th className={styles.GreyTableText}>Code</th>
							<th className={styles.GreyTableText}>Name</th>
							<th className={styles.GreyTableText}>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.filterOccupiedClasses().map((classItem) => (
							<tr className={styles.GreyTableRow} key={classItem._id}>
								<td className={styles.GreyTableText}>{classItem.code}</td>
								<td className={styles.GreyTableText}>{classItem.name}</td>
								<td className={styles.GreyTableButtonTD}>
									<button
										className="btn btn-warning btn-sm"
										onClick={() =>
											this.props.onAddEnrolment(
												this.state.student._id,
												classItem._id
											)
										}
									>
										Add
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

export default Classes;
