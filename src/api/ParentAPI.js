const fetchParentByParentID = (parentID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/parentInformation/${parentID}/`)
    .then((response) => response.json());
}

const fetchParents = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/parentInformation/`)
    .then((response) => response.json());
}

const addParentforPlayer = (parentObject, onSuccess, onFailure) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/parentInformation/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(parentObject)
  }).then((r) => onSuccess())
  .catch((e) => onFailure(e))
}

const editParentByID = (parentObject, parentID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/parentInformation/${parentID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(parentObject)
  })
}


const deleteParentByID = (parentID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/parentInformation/${parentID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify()
  })
}



export default {
  fetchParents: fetchParents,
  addParentforPlayer: addParentforPlayer,
  fetchParentByParentID: fetchParentByParentID,
  editParentByID: editParentByID,
  deleteParentByID: deleteParentByID,

}