import axios from "axios";

const api = axios.create({
    // Endereço do seu backend
    baseURL: "https://localhost:3001",
    // Definir um tempo para as requições
    timeout: 5000

});

export default api;

