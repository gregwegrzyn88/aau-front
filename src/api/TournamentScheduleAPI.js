const fetchTournamentByTournamentID = (tourneyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/tournamentSchedule/${tourneyID}/`)
    .then((response) => response.json());
}

const fetchScheduledTournaments = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/tournamentSchedule/`)
    .then((response) => response.json());
}

const addTournamentforTeam = (tournementObject, onSuccess, onFailure) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/tournamentSchedule/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(tournementObject)
  }).then((r) => onSuccess())
  .catch((e) => onFailure(e))
}

const editTournamentByID = (tournementObject, tourneyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/tournamentSchedule/${tourneyID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(tournementObject)
  })
}


const deleteTournamentByID = (tourneyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/tournamentSchedule/${tourneyID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify()
  })
}



export default {
  fetchScheduledTournaments: fetchScheduledTournaments,
  addTournamentforTeam: addTournamentforTeam,
  fetchTournamentByTournamentID: fetchTournamentByTournamentID,
  editTournamentByID: editTournamentByID,
  deleteTournamentByID: deleteTournamentByID,

}