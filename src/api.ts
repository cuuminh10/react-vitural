import axios from 'axios';

const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

let baseURL = "http://125.212.237.162:9000/api/v1"
if (!development)
    baseURL = "https://basicemployeedirectorywebapi.azurewebsites.net/api"


export default axios.create({
    baseURL
});