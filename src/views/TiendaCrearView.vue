<template>
  <div v-if="authStore.isAuthenticated">
    <h1>Crear Tienda</h1>

    <h2>Formulario de Registro</h2>

    <form @submit.prevent="crearTienda">
      <div>
        <label for="nombre">Nombre:</label>
        <input v-model="form.nombre" id="nombre" type="text" required />
      </div>

      <div>
        <label for="user_id">ID del Usuario:</label>
        <input v-model="form.user_id" id="user_id" type="number" required />
      </div>

      <button type="submit">Guardar Tienda</button>
    </form>
  </div>
  <div v-else>
    <p>No estás autenticado. Por favor, inicia sesión.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../api/stores/storeapi'; // Para acceder al store de autenticación
import { useRouter } from 'vue-router'; // Para redirigir al login si no está autenticado
import { postTienda } from '../api/api';

const authStore = useAuthStore();
const router = useRouter();

// Verificar si está autenticado
const isAuthenticated = ref(authStore.isAuthenticated);

onMounted(() => {
  if (!isAuthenticated.value) {
    router.push('/login');
  }
});

const form = ref({
  nombre: '',
  user_id: null,
});

const crearTienda = async () => {
  try {
    const respuesta = await postTienda(form.value);
    console.log('Tienda creada', respuesta);
  } catch (error) {
    console.error('Error al crear la tienda:', error);
  }
};
</script>

<style scoped>
/* Aquí puedes agregar estilos si los necesitas */
</style>
