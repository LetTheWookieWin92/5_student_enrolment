import React, { Component } from "react";

// Components
import Classes from "./classes";

//Services
import { getClasses } from "../services/classService";

// CSS
import styles from "./css/styles.module.css";
import headingStyles from "./css/headingStyles.module.css";

class StudentProfile extends Component {
	state = {
		student: this.props.student,
		classes: getClasses(),
		profileMode: false,
	};

	/* Looks up class object from student enrolments using class id */
	lookUpClass(classID) {
		return this.state.classes.filter((classObj) => classObj._id == classID);
	}

	/* Changes the interface to add enrolment mode */
	changemode() {
		let newProfileMode = this.state.profileMode;
		newProfileMode = !newProfileMode;
		this.setState({ profileMode: newProfileMode });
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
				{/* checks for a student's enrolments from student object, if present create table */}
				{this.state.student.enrolments.length > 0 && (
					<table className={styles.GreyTable}>
						<thead className={styles.GreyTableHeader}>
							<tr>
								<th className={styles.GreyTableText}>Code</th>
								<th className={styles.GreyTableText}>Name</th>
								<th className={styles.GreyTableText}>Actions</th>
							</tr>
						</thead>
						<tbody>
							{/* Looks up class codes and names to populate table */}
							{this.state.student.enrolments.map((enrolmentItem) => (
								<tr className={styles.GreyTableRow} key={enrolmentItem}>
									<td className={styles.GreyTableText}>
										{this.lookUpClass(enrolmentItem)[0].code}
									</td>
									<td className={styles.GreyTableText}>
										{this.lookUpClass(enrolmentItem)[0].name}
									</td>
									<td className={styles.GreyTableButtonTD}>
										<button
											className="btn btn-warning btn-sm"
											onClick={() =>
												this.props.onDeleteEnrolment(
													this.state.student._id,
													enrolmentItem
												)
											}
										>
											Remove
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
				&nbsp;
				{this.state.profileMode == false && (
					<button
						className="btn btn-success btn-sm fBtn"
						onClick={() => this.changemode()}
					>
						Add new
					</button>
				)}
				{this.state.profileMode == true && <Classes />}
			</React.Fragment>
		);
	}
}

export default StudentProfile;

/* 

<button
											className="btn btn-warning btn-sm"
											onClick={() => console.log("delete")}
										>
											Remove
										</button>

										*/
