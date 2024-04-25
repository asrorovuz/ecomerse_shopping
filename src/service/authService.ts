import axios from "./index";

const AuthService = {
    async userRegister(data: any) {
        const response = await axios.post("/register", data)
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("id", response.data.data.id)
        return response
    },
    async userLogin(data: any) {

        const response = await axios.post("/auth", data)

        localStorage.setItem("token", response.data.token)
        localStorage.setItem("id", response.data.data.id)
        return response
    },
    async getLogin(id: any) {
        const response = await axios.get(`/users/${id}`)
        return response
    }
}

export default AuthService