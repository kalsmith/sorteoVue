<template>
  <div v-if="authStore.isAuthenticated">
    <div>
      <button @click="handleLogout">Cerrar sesión</button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../api/stores/storeapi';
import { useRouter } from 'vue-router'; // Para redirigir al login después de cerrar sesión

const authStore = useAuthStore();
const router = useRouter(); // Redirigir a una ruta

// Manejador de logout
const handleLogout = async () => {
  try {
    await authStore.logout(); // Llamamos a la acción de logout en el store
    router.push('/login'); // Redirigimos a la página de login
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};

console.log('Token:', authStore.token);
console.log('Autenticado:', authStore.isAuthenticated);
</script>
