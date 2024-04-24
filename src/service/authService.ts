import axios from "./index";

const AuthService = {
    async userRegister(data: any) {
        const response = await axios.post("/register", data)
        return response
    },
    async userLogin(data: any) {

        const response = await axios.post("/auth", data
        )

        return response
    }
}

export default AuthService