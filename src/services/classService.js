const classes = [
	{
		_id: "5b21ca3eeb7f6fbccd471815",
		code: "BUSI0001",
		name: "Foundations of Business",
		prerequisites: [],
		enrolments: [],
	},
	{
		_id: "9b21ca3geb7f6fbcc64718ba",
		code: "ECON0001",
		name: "Economics I",
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

/*
export function saveMovie(movie) {
	let movieInDb = movies.find((m) => m._id === movie._id) || {};
	movieInDb.name = movie.name;
	movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
	movieInDb.numberInStock = movie.numberInStock;
	movieInDb.dailyRentalRate = movie.dailyRentalRate;

	if (!movieInDb._id) {
		movieInDb._id = Date.now();
		movies.push(movieInDb);
	}

	return movieInDb;
}

export function deleteMovie(id) {
	let movieInDb = movies.find((m) => m._id === id);
	movies.splice(movies.indexOf(movieInDb), 1);
	return movieInDb;
}
*/
