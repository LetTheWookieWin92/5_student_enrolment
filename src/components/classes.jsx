import React, { Component } from "react";
import { getClasses } from "../services/classService";

// CSS
import styles from "./css/styles.module.css";
import headingStyles from "./css/headingStyles.module.css";

class Classes extends Component {
	state = {
		classes: getClasses(),
	};

	//testing github credentials

	handleOpenClassList = (classItem) => {
		// Creates new movies array, excluding particular movie ID
		//const newMovies = this.state.movies.filter((m) => m._id !== movie._id);
		console.log(classItem._id);
	};

	render() {
		return (
			<React.Fragment>
				<h1 className={headingStyles.pageTitle}>Class Enrolments</h1>
				<table className={styles.GreyTable}>
					<thead className={styles.GreyTableHeader}>
						<tr>
							<th className={styles.GreyTableText}>Code</th>
							<th className={styles.GreyTableText}>Name</th>
							<th className={styles.GreyTableText}>Capacity</th>
							<th className={styles.GreyTableText}>Class List</th>
						</tr>
					</thead>
					<tbody>
						{this.state.classes.map((classItem) => (
							<tr className={styles.GreyTableRow} key={classItem._id}>
								<td className={styles.GreyTableText}>{classItem.code}</td>
								<td className={styles.GreyTableText}>{classItem.name}</td>
								<td className={styles.GreyTableText}>
									{classItem.enrolments.length + " / " + classItem.maxCapacity}
								</td>
								<td className={styles.GreyTableButtonTD}>
									<button
										className="btn btn-info btn-sm"
										onClick={() => this.handleOpenClassList(classItem)}
									>
										Open
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
