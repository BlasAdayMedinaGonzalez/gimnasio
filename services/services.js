import axios from 'axios';
const APIURL = 'http://localhost:8000/api/v1'


const fgetAllexercises = async () => {
    return await axios.get(`${APIURL}/ejercicios`);
}
const fgetAllentrenamientos = async () => {
    return await axios.get(`${APIURL}/entrenamientos`);
}

const agregaremployee = (employee) => {
    return axios.post(`${APIURL}/employee`, employee)
}

const editaremployee = (employee, id) => {
    return axios.put(`${APIURL}/employee/${id}`, employee);
}

const eliminaremployee = (id) => {
    return axios.delete(`${APIURL}/employee/${id}`);
}

export default fgetAllexercises;