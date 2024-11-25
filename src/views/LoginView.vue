<template>
    <div>
      <h1>Login</h1>

      <form @submit.prevent="userLogin">
      <div>
        <label for="email">Nombre:</label>
        <input v-model="form.email" id="email" type="text" required />
      </div>

      <div>
        <label for="password">password:</label>
        <input v-model="form.password" id="password" type="text" required />
      </div>

      <div>
        <label for="device_name">device_name:</label>
        <input v-model="form.device_name" id="device_name" type="text" value="Vue" required />
      </div>

      <button type="submit">Login</button>
    </form>


    </div>
  </template>
  
<script setup>
    import { ref } from 'vue';
    const form = ref({
        email:'',
        password:'',
        device_name:''

   })

const userLogin = async () => {
    try{
        const respuesta = await loginUser(form.value);
        console.log('Login OK', respuesta)

    } catch(error){
        console.error('Error en el Login',error);
    }

}

</script>
  
  <style scoped>

  </style>
  