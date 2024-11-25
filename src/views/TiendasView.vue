<template>
  <div v-if="isAuthenticated">
    <h1>Datos de la API</h1>

    <ul v-if="tiendas.length">
      <li v-for="(tienda, index) in tiendas" :key="index">
        {{ tienda.nombre }} - {{ tienda.user?.name || 'Sin usuario' }}
      </li>
    </ul>
  </div>
  <div v-else>
    <p>No estás autenticado. Por favor, inicia sesión.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getTiendas } from '../api/api';
import { useAuthStore } from '../api/stores/storeapi'; 
import { useRouter } from 'vue-router'; // Para redirigir al login si no está autenticado

const tiendas = ref([]);
const authStore = useAuthStore();
const router = useRouter();

// Verificar si el usuario está autenticado
const isAuthenticated = ref(authStore.isAuthenticated);

// Si no está autenticado, redirigir al login
onMounted(() => {
  if (!isAuthenticated.value) {
    router.push('/login');
  } else {
    // Solo obtener los datos si el usuario está autenticado
    fetchTiendas();
  }
});

// Obtener los datos de las tiendas
const fetchTiendas = async () => {
  try {
    const data = await getTiendas();
    console.log(data);
    tiendas.value = data.data;
  } catch (error) {
    console.error('Error al obtener las tiendas:', error);
  }
};
</script>

<style scoped>
/* Aquí puedes agregar estilos si los necesitas */
</style>
