import axios from 'axios';

const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

let baseURL = "http://125.212.237.162:9000/api/v1"
if (!development)
    baseURL = "http://125.212.237.162:9000/api/v1"

export default axios.create({
    baseURL
});