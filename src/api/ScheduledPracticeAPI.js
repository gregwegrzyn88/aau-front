const fetchPracticeByPracticeID = (practiceID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/scheduledPractice/${practiceID}/`)
    .then((response) => response.json());
}

const fetchScheduledPractices = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/scheduledPractice/`)
    .then((response) => response.json());
}

const addScheduledPracticeforTeam = (scheduledPracticeObject, onSuccess, onFailure) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/scheduledPractice/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(scheduledPracticeObject)
  }).then((r) => onSuccess())
  .catch((e) => onFailure(e))
}

const editScheduledPracticeByID = (practiceObject, practiceID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/scheduledPractice/${practiceID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(practiceObject)
  })
}


const deletePracticeByID = (practiceID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/scheduledPractice/${practiceID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify()
  })
}



export default {
  fetchScheduledPractices: fetchScheduledPractices,
  addScheduledPracticeforTeam: addScheduledPracticeforTeam,
  fetchPracticeByPracticeID: fetchPracticeByPracticeID,
  editScheduledPracticeByID: editScheduledPracticeByID,
  deletePracticeByID: deletePracticeByID,

}