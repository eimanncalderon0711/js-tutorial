const person = {
    name: 'John Doe',
    age: 30,
    status: 'single',
    favoriteColor: 'blue'
}

const car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'red'
}


const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        genre: 'Novel'
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        genre: 'Novel'
    }
]

const movies = [
    {
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        genre: 'Science Fiction'
    },
    {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        genre: 'Drama'
    },
    {
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        year: 1972,
        genre: 'Crime'
    }
]



// Expected Output:
// Movie1 - Inception, directed by Christopher Nolan, released in 2010, Genre: Science Fiction
// Movie2 - The Shawshank Redemption, directed by Frank Darabont, released in 1994, Genre: Drama
// Movie3 - The Godfather, directed by Francis Ford Coppola, released in 1972, Genre: Crime


// arrayname.map(() => {});
movies.map(function(movie) {
    console.log(movie)
});
    