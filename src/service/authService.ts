import axios from "./index";

const AuthService = {
    async userRegister(data: any) {
        const response = await axios.post("/register", data)
        localStorage.setItem("token", response.data.token)
        return response
    },
    async userLogin(data: any) {

        const response = await axios.post("/auth", data)
        
        localStorage.setItem("token", response.data.token)
        return response
    },
    async getLogin() {
        const response = await axios.get(`/users`)
        return response
    }
}

export default AuthService