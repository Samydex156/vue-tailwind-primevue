<script setup>
import Button from "primevue/button"
import Card from "primevue/card"
import InputText from "primevue/inputtext"
import { ref } from 'vue'

const text = ref('')
const fondoImagen = "https://f005.backblazeb2.com/file/optalvis/lentes/lentes(16).jpg";

</script>

<template>
  <div 
    class="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url('${fondoImagen}')` }"
  >
    
    <Card class="w-full max-w-md shadow-2xl border-0 rounded-2xl overflow-hidden p-4 z-10 bg-white/40 backdrop-blur-md">
      
      <template #title>
        <div class="flex items-center gap-2 text-blue-600">
          <i class="pi pi-user text-2xl"></i>
          <span class="font-bold">Login ERP</span>
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-4 mt-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-semibold text-gray-600">Usuario</label>
            <InputText v-model="text" placeholder="Ingresa tu usuario" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-semibold text-gray-600">Contraseña</label>
            <InputText type="password" class="w-full" />
          </div>

          <Button label="Ingresar al Sistema" icon="pi pi-check" class="w-full mt-2" />
          
          <p class="text-xs text-center text-gray-500 mt-2 font-medium">
            Sistema desarrollado con Vue 3 + PrimeVue + Tailwind
          </p>
        </div>
      </template>
    </Card>

  </div>
</template>