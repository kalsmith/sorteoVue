import { defineStore } from "pinia";
import { logoutUser } from "../api"; // Importa la función de logout

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: localStorage.getItem("auth_token") || null, // Recupera el token desde localStorage si existe
    }),
    getters: {
        isAuthenticated: (state) => !!state.token, // Verifica si el usuario está autenticado
    },
    actions: {
        setToken(rawToken) {
            const token = rawToken.split("|")[1]; // Extrae solo la parte del token (sin el ID)
            this.token = token;
            localStorage.setItem("auth_token", token); // Almacena el token en localStorage
        },
        async logout() {
            try {
                await logoutUser(); // Llama a la función de API para realizar el logout
                this.token = null;
                localStorage.removeItem("auth_token"); // Limpia el token del localStorage
                console.log("Logout exitoso");
            } catch (error) {
                console.error("Error en el logout:", error);
            }
        },
    },
});
