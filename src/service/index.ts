import axios from "axios";

export default axios.create({
    baseURL: "https://f7020acc88056659.mokky.dev",
    headers: {
        ['Authorization']: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ""
    }
})
