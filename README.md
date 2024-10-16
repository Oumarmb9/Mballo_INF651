Movie Watchlist Application


Features
Add Movies: Users can input a movie title and click the "Add Movie" button to add it to the watchlist.

Display Watchlist: The list of movies is displayed dynamically on the webpage.

Remove Movies: Once the user has watched a movie, they can remove it from the list by clicking the "Watched" button.

How to Use
Adding a Movie:

Enter a movie title into the input field labeled "Enter movie title".
Click the "Add Movie" button. The movie will be added to the watchlist and displayed below.
Removing a Movie:

Once you've watched a movie, you can remove it from the watchlist by clicking the "Watched" button next to the movie.
This will remove the movie from the list and update the display.

JavaScript Code Explanation
movieList Array: Stores all the movie titles that the user adds.
addMovie(): Adds the user-inputted movie to the array and updates the display.
displayMovies(): Dynamically displays the current list of movies from the movieList array.
removeMovie(): Removes the movie from the array when the user clicks the "Watched" button and updates the list.
