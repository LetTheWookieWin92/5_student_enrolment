import React, { Component } from "react";
import { getClasses } from "../services/classService";

// CSS
import styles from "./css/styles.module.css";
import headingStyles from "./css/headingStyles.module.css";

class Classes extends Component {
	state = {
		classes: getClasses(),
	};

	render() {
		return (
			<React.Fragment>
				<h4 className={headingStyles.pageTitle}>Class Availability</h4>
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
									<button className="btn btn-warning btn-sm">Add</button>
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
