const students = [
	{
		_id: "55tefgca3eeb7fdhtrcd471815",
		sid: "123456789",
		name: "John Smith",
		enrolments: [],
	},
	{
		_id: "55tefgca3eeb7fdhtrcd471815",
		sid: "987654321",
		name: "Amy Crackhouse",
		enrolments: [],
	},
];

export function getStudents() {
	return students;
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
