import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 1. Importar PrimeVue y el Tema
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Aura from '@primevue/themes/aura';

const app = createApp(App);

// 2. Usar el plugin con la configuración del tema
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            // Esto es vital: permite que Tailwind tenga prioridad sobre estilos base si es necesario
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});
app.use(ToastService);

app.mount('#app');