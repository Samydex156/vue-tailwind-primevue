<template>
  <div class="bg-gray-50 p-8 dark:bg-gray-900 transition-colors duration-300">
    <Toast />
    
    <div class="max-w-7xl mx-auto mb-8 text-center space-y-4" v-motion-slide-visible-top>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        <i class="pi pi-prime text-emerald-500 mr-2"></i>Galería de Iconos
      </h1>
      <p class="text-gray-500 dark:text-gray-400">Haz clic en copiar para usar en tu proyecto</p>
      
      <span class="relative w-full max-w-md mx-auto block">
        <i class="pi pi-search absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 z-10"></i>
        <InputText 
          v-model="searchQuery" 
          placeholder="Buscar icono (ej: user, arrow)..." 
          class="w-full pl-10 p-3 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm hover:border-emerald-500 focus:border-emerald-500 transition-all"
        />
      </span>
    </div>

    <div v-if="filteredIcons.length > 0" class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      
      <div 
        v-for="(icon, index) in filteredIcons" 
        :key="icon"
        class="group relative flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-transparent hover:border-emerald-500 hover:shadow-md transition-all duration-300 cursor-pointer"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: index * 10, duration: 300 } }"
      >
        <i :class="`pi ${icon}`" class="text-3xl text-gray-600 dark:text-gray-300 mb-3 group-hover:text-emerald-500 group-hover:scale-110 transition-transform duration-300"></i>
        
        <span class="text-xs text-gray-500 dark:text-gray-400 font-mono truncate w-full text-center select-all">
          {{ icon }}
        </span>

        <div class="mt-3 w-full">
            <Button 
              :label="copiedIcon === icon ? 'Copiado' : 'Copiar'" 
              :icon="copiedIcon === icon ? 'pi pi-check' : 'pi pi-copy'" 
              size="small"
              outlined
              :class="[
                'w-full text-xs py-1', 
                copiedIcon === icon ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'text-gray-500 border-gray-200 hover:bg-gray-50'
              ]"
              @click="copyToClipboard(icon)"
            />
        </div>
      </div>

    </div>

    <div v-else class="text-center py-20 text-gray-400">
      <i class="pi pi-filter-slash text-4xl mb-2"></i>
      <p>No se encontraron iconos con "{{ searchQuery }}"</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useToast } from 'primevue/usetoast';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';

const toast = useToast();
const searchQuery = ref('');
const copiedIcon = ref(null);

// Función para copiar al portapapeles
const copyToClipboard = async (iconName) => {
  try {
    await navigator.clipboard.writeText(iconName);
    copiedIcon.value = iconName;
    
    toast.add({ 
      severity: 'success', 
      summary: 'Copiado', 
      detail: `Clase ${iconName} copiada`, 
      life: 2000 
    });

    // Resetear el estado visual del botón después de 2 seg
    setTimeout(() => {
      copiedIcon.value = null;
    }, 2000);
  } catch (err) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo copiar', life: 3000 });
  }
};

// Lista completa de iconos basada en tu CSV
const allIcons = [
  "pi-address-book", "pi-align-center", "pi-align-justify", "pi-align-left", "pi-align-right", 
  "pi-amazon", "pi-android", "pi-angle-double-down", "pi-angle-double-left", "pi-angle-double-right", 
  "pi-angle-double-up", "pi-angle-down", "pi-angle-left", "pi-angle-right", "pi-angle-up", "pi-apple", 
  "pi-arrow-circle-down", "pi-arrow-circle-left", "pi-arrow-circle-right", "pi-arrow-circle-up", 
  "pi-arrow-down", "pi-arrow-down-left", "pi-arrow-down-left-and-arrow-up-right-to-center", 
  "pi-arrow-down-right", "pi-arrow-left", "pi-arrow-right", "pi-arrow-right-arrow-left", 
  "pi-arrow-up", "pi-arrow-up-left", "pi-arrow-up-right", "pi-arrow-up-right-and-arrow-down-left-from-center", 
  "pi-arrows-alt", "pi-arrows-h", "pi-arrows-v", "pi-asterisk", "pi-at", "pi-backward", "pi-ban", 
  "pi-barcode", "pi-bars", "pi-bell", "pi-bell-slash", "pi-bitcoin", "pi-bolt", "pi-book", 
  "pi-bookmark", "pi-bookmark-fill", "pi-box", "pi-briefcase", "pi-building", "pi-building-columns", 
  "pi-bullseye", "pi-calculator", "pi-calendar", "pi-calendar-clock", "pi-calendar-minus", 
  "pi-calendar-plus", "pi-calendar-times", "pi-camera", "pi-car", "pi-caret-down", "pi-caret-left", 
  "pi-caret-right", "pi-caret-up", "pi-cart-arrow-down", "pi-cart-minus", "pi-cart-plus", "pi-chart-bar", 
  "pi-chart-line", "pi-chart-pie", "pi-chart-scatter", "pi-check", "pi-check-circle", "pi-check-square", 
  "pi-chevron-circle-down", "pi-chevron-circle-left", "pi-chevron-circle-right", "pi-chevron-circle-up", 
  "pi-chevron-down", "pi-chevron-left", "pi-chevron-right", "pi-chevron-up", "pi-circle", "pi-circle-fill", 
  "pi-clipboard", "pi-clock", "pi-clone", "pi-cloud", "pi-cloud-download", "pi-cloud-upload", "pi-code", 
  "pi-cog", "pi-comment", "pi-comments", "pi-compass", "pi-copy", "pi-credit-card", "pi-crown", 
  "pi-database", "pi-delete-left", "pi-desktop", "pi-directions", "pi-directions-alt", "pi-discord", 
  "pi-dollar", "pi-download", "pi-eject", "pi-ellipsis-h", "pi-ellipsis-v", "pi-envelope", "pi-equals", 
  "pi-eraser", "pi-ethereum", "pi-euro", "pi-exclamation-circle", "pi-exclamation-triangle", "pi-expand", 
  "pi-external-link", "pi-eye", "pi-eye-slash", "pi-face-smile", "pi-facebook", "pi-fast-backward", 
  "pi-fast-forward", "pi-file", "pi-file-arrow-up", "pi-file-check", "pi-file-edit", "pi-file-excel", 
  "pi-file-export", "pi-file-import", "pi-file-pdf", "pi-file-plus", "pi-file-word", "pi-filter", 
  "pi-filter-fill", "pi-filter-slash", "pi-flag", "pi-flag-fill", "pi-folder", "pi-folder-open", 
  "pi-folder-plus", "pi-forward", "pi-gauge", "pi-gift", "pi-github", "pi-globe", "pi-google", 
  "pi-graduation-cap", "pi-hammer", "pi-hashtag", "pi-headphones", "pi-heart", "pi-heart-fill", 
  "pi-history", "pi-home", "pi-hourglass", "pi-id-card", "pi-image", "pi-images", "pi-inbox", 
  "pi-indian-rupee", "pi-info", "pi-info-circle", "pi-instagram", "pi-key", "pi-language", "pi-lightbulb", 
  "pi-link", "pi-linkedin", "pi-list", "pi-list-check", "pi-lock", "pi-lock-open", "pi-map", 
  "pi-map-marker", "pi-mars", "pi-megaphone", "pi-microchip", "pi-microchip-ai", "pi-microphone", 
  "pi-microsoft", "pi-minus", "pi-minus-circle", "pi-mobile", "pi-money-bill", "pi-moon", 
  "pi-objects-column", "pi-palette", "pi-paperclip", "pi-pause", "pi-pause-circle", "pi-paypal", 
  "pi-pen-to-square", "pi-pencil", "pi-percentage", "pi-phone", "pi-pinterest", "pi-play", 
  "pi-play-circle", "pi-plus", "pi-plus-circle", "pi-pound", "pi-power-off", "pi-prime", "pi-print", 
  "pi-qrcode", "pi-question", "pi-question-circle", "pi-receipt", "pi-reddit", "pi-refresh", "pi-replay", 
  "pi-reply", "pi-save", "pi-search", "pi-search-minus", "pi-search-plus", "pi-send", "pi-server", 
  "pi-share-alt", "pi-shield", "pi-shop", "pi-shopping-bag", "pi-shopping-cart", "pi-sign-in", 
  "pi-sign-out", "pi-sitemap", "pi-slack", "pi-sliders-h", "pi-sliders-v", "pi-sort", "pi-sort-alpha-down", 
  "pi-sort-alpha-down-alt", "pi-sort-alpha-up", "pi-sort-alpha-up-alt", "pi-sort-alt", "pi-sort-alt-slash", 
  "pi-sort-amount-down", "pi-sort-amount-down-alt", "pi-sort-amount-up", "pi-sort-amount-up-alt", 
  "pi-sort-down", "pi-sort-down-fill", "pi-sort-numeric-down", "pi-sort-numeric-down-alt", 
  "pi-sort-numeric-up", "pi-sort-numeric-up-alt", "pi-sort-up", "pi-sort-up-fill", "pi-sparkles", 
  "pi-spinner", "pi-spinner-dotted", "pi-star", "pi-star-fill", "pi-star-half", "pi-star-half-fill", 
  "pi-step-backward", "pi-step-backward-alt", "pi-step-forward", "pi-step-forward-alt", "pi-stop", 
  "pi-stop-circle", "pi-stopwatch", "pi-sun", "pi-sync", "pi-table", "pi-tablet", "pi-tag", "pi-tags", 
  "pi-telegram", "pi-th-large", "pi-thumbs-down", "pi-thumbs-down-fill", "pi-thumbs-up", 
  "pi-thumbs-up-fill", "pi-thumbtack", "pi-ticket", "pi-tiktok", "pi-times", "pi-times-circle", 
  "pi-trash", "pi-trophy", "pi-truck", "pi-turkish-lira", "pi-twitch", "pi-twitter", "pi-undo", 
  "pi-unlock", "pi-upload", "pi-user", "pi-user-edit", "pi-user-minus", "pi-user-plus", "pi-users", 
  "pi-venus", "pi-verified", "pi-video", "pi-vimeo", "pi-volume-down", "pi-volume-off", "pi-volume-up", 
  "pi-wallet", "pi-warehouse", "pi-wave-pulse", "pi-whatsapp", "pi-wifi", "pi-window-maximize", 
  "pi-window-minimize", "pi-wrench", "pi-youtube"
];

// Computed Property para filtrar
const filteredIcons = computed(() => {
  if (!searchQuery.value) return allIcons;
  return allIcons.filter(icon => 
    icon.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped>
/* Ajustes finos para scrollbar si fuera necesario */
</style>