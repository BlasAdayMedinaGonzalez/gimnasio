import axios from 'axios';
const APIURL = 'http://localhost:8000/api/v1'


const fgetAllentrenamientos = async () => {
    return await axios.get(`${APIURL}/entrenamientos`);
}


export default fgetAllentrenamientos;