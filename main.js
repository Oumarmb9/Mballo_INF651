// Array to store the movie titles
let movieList = [];

// Function to add a movie to the list
function addMovie() {
  // Get the movie title input by the user
  const movieInput = document.getElementById('movie-name').value.trim();

  // Check if input is not empty
  if (movieInput === '') {
    alert('Please enter a movie title.');
    return;
  }

  // Add the movie to the array
  movieList.push(movieInput);

  // Clear the input field
  document.getElementById('movie-name').value = '';

  // Update the movie list displayed on the webpage
  displayMovies();
}

// Function to display the list of movies dynamically
function displayMovies() {
  // Get the unordered list element from the DOM
  const movieListContainer = document.getElementById('movie-list');

  // Clear the current list to avoid duplicates
  movieListContainer.innerHTML = '';

  // Loop through the movieList array and create list items
  movieList.forEach((movie, index) => {
    // Create a new list item (li)
    const li = document.createElement('li');
    li.classList.add('collection-item'); // Materialize CSS class

    // Add movie name text
    li.textContent = movie;

    // Create a 'Remove' button to mark the movie as watched
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('secondary-content', 'btn-small', 'red', 'waves-effect');
    removeBtn.textContent = 'Watched';

    // Add event listener to the 'Watched' button to remove the movie
    removeBtn.addEventListener('click', () => {
      removeMovie(index); // Call the removeMovie function with the movie's index
    });

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the movie list container
    movieListContainer.appendChild(li);
  });
}

// Function to remove a movie from the list (mark as watched)
function removeMovie(index) {
  // Remove the movie from the array using its index
  movieList.splice(index, 1);

  // Update the movie list displayed on the webpage
  displayMovies();
}

// Add event listener to the 'Add Movie' button
document.getElementById('add-movie-btn').addEventListener('click', addMovie);
