fetch('http://swapi.co/api/films?format=json')
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {

    // movies info
    let movies = data.results;
    //console.log(movies)
    Object.keys(movies).forEach(key => {
      const movie = movies[key];
      //console.log(movie.title)
      //$('#films-list').text(movie.title);
      $('#films-list').append(movie.title);
      container.append(movie.title); // .after('\n'); // .append("<br/>");
      $('#starships-list').hide();
      $('#pilots-list').hide();
      // starships
      //console.log(movie.starships)
    
      let moviesStarships = [];
      moviesStarships.push(movie.starships);
      //console.log(moviesStarships)
      Object.keys(moviesStarships).forEach(key => {
        // console.log(moviesStarships[key])
        // let starshipsInfo = $('<ul>').addClass('starships');
        // let link = $('<a>')
        //           .addClass('starship-link')
        //           .text(moviesStarships[key])
        //           .data('url', moviesStarships[key])
        //           .attr('href', '#');
        // let li = $('<li>').append(link);
        // starshipsInfo.append(li);
        const starships = moviesStarships[key];
        //console.log(starships)
        let starShipsElement = $('<ul>').addClass('starships');
        for (let i=0; i<starships.length; i++) {
          console.log(starships[i])
          let link = $('<a>').addClass('starship-link')
                  .text(starships[i])
                  .data('url', starships[i])
                  .attr('href', '#');
          let li = $('<li>').append(link);
          starShipsElement.append(li);
          let film = $('<div>').addClass('film').append(starShipsElement);
          
          fetch(starships[i])
            .then(function(response) {
              return response.json();
            })

            .then(function(data){
              let starships = data.name;
              //console.log(starships)
              $('#starships-list').append(starships);

              // pilots
              let pilotsList = data.pilots;
              //console.log(pilotsList)
              Object.keys(pilotsList).forEach(key => {
                const pilots = pilotsList[key];
                $('#pilots-list').append(pilots);
              })
              
            })
        }  
      })

    })
  });


$(document).ready();