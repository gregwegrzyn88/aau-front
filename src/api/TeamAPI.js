const fetchTeamByTeamID = (teamID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/team/${teamID}/`)
    .then((response) => response.json());
}

const fetchTeams = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/team/`)
    .then((response) => response.json());
}

const addTeamForCompany = (teamObject, onSuccess, onFailure) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/team/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(teamObject)
  }).then((r) => onSuccess())
  .catch((e) => onFailure(e))
}

const editTeamByID = (teamObject, teamID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/team/${teamID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(teamObject)
  })
}


const deleteTeamByID = (teamID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/team/${teamID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify()
  })
}



export default {
  fetchTeams: fetchTeams,
  addTeamForCompany: addTeamForCompany,
  editTeamByID: editTeamByID,
  fetchTeamByTeamID: fetchTeamByTeamID,
  deleteTeamByID: deleteTeamByID

//   fetchPosts: fetchPosts,
//   addPostForCategory: addPostForCategory,
//   editPostByID: editPostByID,
//   deletePostByID: deletePostByID
}