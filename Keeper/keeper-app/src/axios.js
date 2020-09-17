import axios from "axios";

axios.create({
    baseURL: "localhost:5000",
});

export default axios;