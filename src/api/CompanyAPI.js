const fetchCompanies = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/company/`)
    .then((response) => response.json());
}

const fetchCompanyByID = (companyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/company//${companyID}/`)
    .then((response) => response.json());
}

const addCompany = (companyObject) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/company/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(companyObject)
  })
}

const editCompanyByID = (companyObject, companyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/company/${companyID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(companyObject)
  })
}

const deleteCompanyByID = (companyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://schedule-api-aau.herokuapp.com/company/${companyID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify()
  })
}


export default {
  fetchCompanies: fetchCompanies,
  addCompany: addCompany,
  fetchCompanyByID: fetchCompanyByID,
  editCompanyByID: editCompanyByID,
  deleteCompanyByID: deleteCompanyByID,
  // fetchCategoryByID: fetchCategoryByID
}