import axios from "axios";

const instance = axios.create({
    baseURL: "https://training-log-backend.herokuapp.com"
});

export default instance;