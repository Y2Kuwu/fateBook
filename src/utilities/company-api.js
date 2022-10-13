import sendRequest from './send-request';
const BASE_URL = '/api/company';


// export function createEmployee(employeeId){
//     return sendRequest(`${BASE_URL}/employee${employeeId}`, 'POST');
// }

export function createCompany(compForm){
  return sendRequest(BASE_URL, 'POST', compForm );
}

export function createEmployee(employeeForm){
  return sendRequest(BASE_URL, 'POST', employeeForm );
}

export function getCompany() {
    return sendRequest(BASE_URL);
  }

export function detailCompany(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}
// export function getEmployee(companyId) {
//     return sendRequest(`${BASE_URL}/company`);
//   }

// export function addEmployee() {
//     return sendRequest(`${BASE_URL}/company/addEmp`, 'POST');
//   }

export function deleteCompany(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}