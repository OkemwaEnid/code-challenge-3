//Movie Data
const movies = [
    {
      title: "Joker",
      runtime: 120,
      description: "Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of chaos in Gotham City.",
      showtime: "7:00 PM",
      poster: "assets/joker.jpg",
      tickets: 10,
    },
    {
      title: "The giant gila monster",
      runtime: 90,
      description: "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
      showtime: "9:00 PM",
      poster: "assets/giant.png",
      tickets: 5,
    },
    {
      title: "Manos: The Hands Of Fate",
      runtime: 150,
      description: "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
      showtime: "5:00 PM",
      poster: "assets/mano.jpeg",
      tickets: 2,
    },
  ];
  
  // Function to populate movie list
  function populateMovieList() {
    const filmsList = document.getElementById('films');
    filmsList.innerHTML = ''; // Clear existing list
  
    movies.forEach((movie, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'film item';
      listItem.textContent = movie.title;
      listItem.addEventListener('click', () => updateMovieDetails(index));
      filmsList.appendChild(listItem);
    });
  }
  
  // Function to update movie details
  function updateMovieDetails(index) {
    const movie = movies[index];
    document.getElementById('title').textContent = movie.title;
    document.getElementById('runtime').textContent = `${movie.runtime} minutes`;
    document.getElementById('film-info').textContent = movie.description;
    document.getElementById('showtime').textContent = movie.showtime;
    document.getElementById('poster').src = movie.poster;
    document.getElementById('ticket-num').textContent = `${movie.tickets} remaining tickets`;
  }
  
  // Function to handle ticket purchase
  function buyTicket() {
    const movieIndex = movies.findIndex(movie => movie.title === document.getElementById('title').textContent);
    if (movieIndex !== -1) {
      if (movies[movieIndex].tickets > 0) {
        movies[movieIndex].tickets--;
        document.getElementById('ticket-num').textContent = `${movies[movieIndex].tickets} remaining tickets`;
        // alert('Ticket purchased successfully!');
      } else {
        // alert('No tickets available for this movie.');
        // Select the button by its id
  const button = document.getElementById("buy-ticket");

  // Change the text of the button
  button.textContent = "Sold Out";
      }
    }
  }
  
  // Attach event listener for the buy ticket button
  document.getElementById('buy-ticket').addEventListener('click', buyTicket);
  
  // Initialize the movie list on page load
  populateMovieList();