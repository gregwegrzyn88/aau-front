const fetchGameByGameID = (gameID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/tournamentGame/${gameID}/`)
    .then((response) => response.json());
}

const fetchGames = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/tournamentGame/`)
    .then((response) => response.json());
}

const addGameforTourney = (gameObject, onSuccess, onFailure) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/tournamentGame/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(gameObject)
  }).then((r) => onSuccess())
  .catch((e) => onFailure(e))
}

const editGameByID = (gameObject, gameID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/tournamentGame/${gameID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(gameObject)
  })
}


const deleteGameByID = (gameID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/tournamentGame/${gameID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify()
  })
}



export default {
  fetchGames: fetchGames,
  addGameforTourney: addGameforTourney,
  fetchGameByGameID: fetchGameByGameID,
  editGameByID: editGameByID,
  deleteGameByID: deleteGameByID,

}