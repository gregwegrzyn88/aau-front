const fetchCoachByCoachID = (coachID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/coach/${coachID}/`)
    .then((response) => response.json());
}

const fetchCoaches = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/coach/`)
    .then((response) => response.json());
}

const addCoachforTeam = (coachObject, onSuccess, onFailure) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/coach/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(coachObject)
  }).then((r) => onSuccess())
  .catch((e) => onFailure(e))
}

const editCoachByID = (coachObject, coachID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/coach/${coachID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(coachObject)
  })
}


const deleteCoachByID = (coachID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/coach/${coachID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify()
  })
}



export default {
  fetchCoaches: fetchCoaches,
  addCoachforTeam: addCoachforTeam,
  editCoachByID: editCoachByID,
  fetchCoachByCoachID: fetchCoachByCoachID,
  deleteCoachByID: deleteCoachByID
}