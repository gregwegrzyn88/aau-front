const fetchPlayerByPlayerID = (playerID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/player/${playerID}/`)
    .then((response) => response.json());
}

const fetchPlayers = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/player/`)
    .then((response) => response.json());
}

const addPlayerforTeam = (playerObject, onSuccess, onFailure) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/player/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(playerObject)
  }).then((r) => onSuccess())
  .catch((e) => onFailure(e))
}

const editPlayerByID = (playerObject, playerID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/player/${playerID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(playerObject)
  })
}


const deletePlayerByID = (playerID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/player/${playerID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify()
  })
}



export default {
  fetchPlayers: fetchPlayers,
  addPlayerforTeam: addPlayerforTeam,
  fetchPlayerByPlayerID: fetchPlayerByPlayerID,
  editPlayerByID: editPlayerByID,
  deletePlayerByID: deletePlayerByID,

}
