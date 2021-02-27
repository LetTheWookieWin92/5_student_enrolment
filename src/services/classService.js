const classes = [
	{
		_id: "5b21ca3eeb7f6fbccd471815",
		code: "BUSI0001",
		name: "Foundations of Business",
		maxCapacity: 5,
		prerequisites: [],
		enrolments: [],
	},
	{
		_id: "9b21ca3geb7f6fbcc64718ba",
		code: "ECON0001",
		name: "Economics I",
		maxCapacity: 5,
		prerequisites: [],
		enrolments: [],
	},
];

export function getClasses() {
	return classes;
}

export function getClass(id) {
	return classes.find((c) => c._id === id);
}
