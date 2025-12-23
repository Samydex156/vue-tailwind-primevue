<template>
    <div class="flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-900">
        <Card class="w-full max-w-md shadow-2xl border-none overflow-hidden transition-all  hover:scale-[1.01]">
            <template #header>
                <div class="h-32 bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    <i class="pi pi-user-plus text-5xl text-white opacity-90"></i>
                </div>
            </template>
            <template #title>
                <div class="flex items-center justify-between p-3">
                    <span class="text-2xl font-bold text-slate-800 dark:text-white">Contacto Premium</span>
                    <Badge value="Nuevo" severity="info" class="animate-pulse"></Badge>
                </div>
            </template>
            <template #subtitle>
                <span class="text-slate-500 px-4">Usa los componentes de PrimeVue con estilo</span>
            </template>
            <template #content>
                <div class="flex flex-col gap-6 mt-4">
                    <div class="flex flex-col gap-2 px-4">
                        <FloatLabel variant="on">
                            <InputText id="username" v-model="value1" class="w-full px-4 border" />
                            <label for="username">Nombre Completo</label>
                        </FloatLabel>
                    </div>

                    <div class="flex flex-col gap-2 px-4">
                        <FloatLabel variant="on">
                            <InputText id="email" v-model="value2" class="w-full px-4 border border-gray-800" />
                            <label for="email">Correo Electrónico</label>
                        </FloatLabel>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="flex gap-4 mt-1 py-4 px-4">
                    <Button label="Cancelar" severity="secondary" outlined class="flex-1 hover:border-2 hover:border-slate-500 hover:shadow-lg" icon="pi pi-apple" />
                    <Button label="Enviar" severity="info" class="flex-1 hover:border-2 hover:border-slate-500 hover:shadow-lg" icon="pi pi-send" />
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Badge from 'primevue/badge';

const value1 = ref('');
const value2 = ref('');
</script>

<style scoped>
:deep(.p-card) {
    border-radius: 1.5rem;
}

:deep(.p-inputtext) {
    border-radius: 0.75rem;
}

:deep(.p-button) {
    border-radius: 0.75rem;
}
</style>
