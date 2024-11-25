import axios from "axios";
import { useAuthStore } from "./stores/storeapi";

const API_URL = 'http://localhost:8000/api';


// export const getTiendas = async () => {
//     const response = await axios.get(`${API_URL}/tiendas`)
//     return response.data;

//     }


export const getTiendas = async () => {
    const authStore = useAuthStore(); // Obtén el token desde el store
    const token = authStore.token || localStorage.getItem('token'); // Asegúrate de que esté disponible
  
    if (!token) {
      throw new Error("No token found. Please log in.");
    }
  
    try {
      const response = await axios.get(`${API_URL}/tiendas`, {
        headers: {
          Authorization: `Bearer ${token}`, // Agrega el token como encabezado
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching tiendas:", error);
      throw error;
    }
  };

export const postTienda  = async (tiendaData) => {
    try {
        const response = await axios.post(`${API_URL}/tiendas`, tiendaData);
        return response.data;
    } catch (error) {
        console.error('Error al enviar la tienda:', error.response?.data || error.message);
        throw error;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`,userData)
        return response.data;
    } catch (error) {
        console.error('Error Login:', error || error.message);
        throw error;
    }


}

// Función para realizar el logout
export const logoutUser = async () => {
    const authStore = useAuthStore(); // Obtén el token desde el store
    const token = authStore.token || localStorage.getItem('auth_token'); // Asegúrate de que esté disponible

    if (!token) {
        throw new Error("No token found. Please log in.");
    }

    try {
        const response = await axios.post(
            `${API_URL}/logout`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Agrega el token en el encabezado
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error al cerrar sesión:", error.response?.data || error.message);
        throw error;
    }
};
