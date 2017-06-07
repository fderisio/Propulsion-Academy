$(function () {
  fetch('http://swapi.co/api/films/?format=json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      renderFilms(data.results);
    });

  function renderFilms(films) {
    var listContainer = $('#film-list');
    films.forEach(function(film) {
      listContainer.append(renderFilm(film));
    });
  }

  function renderFilm(film) {
    var filmElement = $('<div>').addClass('film');
    var filmTitle = $('<h5>').text(film.title);
    var starShipsElement = $('<ul>').addClass('starships');
    film.starships.forEach(function(starshipHref) {
      var link = $('<a>')
                  .addClass('starship-link')
                  .text(starshipHref)
                  .data('url', starshipHref)
                  .attr('href', '#');
      var li = $('<li>').append(link);
      starShipsElement.append(li);
    });

    return filmElement.append(filmTitle).append(starShipsElement);
  }

  $('#film-list').on('click', '.starship-link', function(e) {
    e.preventDefault();
    var url = $(e.currentTarget).data('url');
    fetchStarship(url);
  });

  function fetchStarship(url) {
    fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        renderStarship(data);
      });
  }

  function renderStarship(starship) {
    var starshipElement = $('<div>').addClass('starship');
    var starshipTitle = $('<h5>').text(starship.name);
    var pilotsElement;
    if (!starship.pilots.length) {
      pilotsElement = $('<p>').text('No Pilots!');
    } else {
      pilotsElement = $('<ul>').addClass('pilots');
      starship.pilots.forEach(function(pilotHref) {
        var link = $('<a>')
        .addClass('pilot-link')
        .text(pilotHref)
        .data('url', pilotHref)
        .attr('href', '#');
        var li = $('<li>').append(link);
        pilotsElement.append(li);
      });
    }
    starshipElement.append(starshipTitle).append(pilotsElement);

    $('#starship').empty().append(starshipElement);
  }


  $('#starship').on('click', '.pilot-link', function(e) {
    e.preventDefault();
    var url = $(e.currentTarget).data('url');
    fetchPilot(url);
  });

  function fetchPilot(url) {
    fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        renderPilot(data);
      });
  }

  function renderPilot(pilot) {
    var pilotTitle = $('<h5>').text(pilot.name);
    var pilotButton = $('<button>').text('Add to Favorite')
    pilotButton.on('click', function() {
      favorites.push(pilot);
      renderFavorites();
    });
    var pilotElement = $('<div>')
                        .append(pilotTitle)
                        .append(pilotButton);

    $('#pilot').empty().append(pilotElement);
  }

  var favorites = [];

  function renderFavorites() {
    var container = $('#favorites').empty();
    favorites.forEach(function(pilot) {
      var favoriteElement = renderFavorite(pilot);
      container.append(favoriteElement);
    });
  }

  function renderFavorite(pilot) {
    var title = $('<h5>').addClass('fav-title').text(pilot.name);
    var button = $('<button>')
      .addClass('unFav')
      .data('pilot-url', pilot.url)
      .text('x');
    return $('<div>').append(title, button);
  }

  $('#favorites').on('click', '.unFav', function(e) {
    var url = $(e.currentTarget).data('pilot-url');
    favorites = favorites.filter(favorite => favorite.url !== url);
    renderFavorites();
  })

});