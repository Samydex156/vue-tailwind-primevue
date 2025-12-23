<template>
  <div class="bg-slate-950 text-white overflow-hidden">
    <!-- Navigation -->
    <nav
      :class="[
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      ]"
    >
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          NeoTech
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-8">
          <button
            v-for="item in menuItems"
            :key="item"
            @click="scrollToSection(item)"
            class="capitalize hover:text-cyan-400 transition-colors"
          >
            {{ item }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-slate-900 border-t border-slate-800">
        <div class="flex flex-col p-6 gap-4">
          <button
            v-for="item in menuItems"
            :key="item"
            @click="scrollToSection(item)"
            class="capitalize text-left hover:text-cyan-400 transition-colors py-2"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      id="inicio"
      ref="heroRef"
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          :style="{ transform: `translateY(${parallaxOffset}px)` }"
        />
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          :style="{ transform: `translateY(${-parallaxOffset}px)` }"
        />
      </div>

      <div
        class="relative z-10 text-center px-6 max-w-5xl mx-auto"
        :style="{ opacity: fadeOpacity }"
      >
        <div class="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
          ✨ Innovación del Futuro
        </div>
        
        <h1 class="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Transforma tu
          <span class="block bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Visión Digital
          </span>
        </h1>
        
        <p class="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
          Potencia tu negocio con soluciones tecnológicas de vanguardia que impulsan el crecimiento exponencial
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="scrollToSection('características')"
            class="group px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
          >
            Comenzar Ahora
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            @click="scrollToSection('contacto')"
            class="px-8 py-4 border-2 border-slate-700 rounded-full font-semibold hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
          >
            Saber Más
          </button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        :style="{ opacity: fadeOpacity }"
      >
        <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section id="características" class="py-32 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-bold mb-6">
            Características
            <span class="block text-cyan-400">Revolucionarias</span>
          </h2>
          <p class="text-xl text-slate-400 max-w-2xl mx-auto">
            Descubre las herramientas que cambiarán tu forma de trabajar
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="group p-8 bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2"
          >
            <div class="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" v-html="feature.icon" />
            <h3 class="text-2xl font-bold mb-4">{{ feature.title }}</h3>
            <p class="text-slate-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonios" class="py-32 px-6 bg-linear-to-b from-slate-950 to-slate-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-bold mb-6">
            Lo Que Dicen
            <span class="block text-cyan-400">Nuestros Clientes</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all"
          >
            <p class="text-lg text-slate-300 mb-6 italic">"{{ testimonial.text }}"</p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-linear-to-br from-cyan-400 to-blue-600 rounded-full" />
              <div>
                <div class="font-semibold">{{ testimonial.name }}</div>
                <div class="text-sm text-slate-400">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contacto" class="py-32 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-5xl md:text-6xl font-bold mb-6">
          Listo Para
          <span class="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Comenzar Tu Viaje
          </span>
        </h2>
        <p class="text-xl text-slate-400 mb-12">
          Únete a miles de empresas que ya están transformando su futuro
        </p>
        <button class="group px-12 py-5 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-3 mx-auto">
          Empezar Gratis
          <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-slate-800 py-12 px-6">
      <div class="max-w-7xl mx-auto text-center text-slate-400">
        <p>&copy; 2024 NeoTech. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
const isMenuOpen = ref(false)
const heroRef = ref(null)

const menuItems = ['inicio', 'características', 'testimonios', 'contacto']

const features = [
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
    title: 'Velocidad Extrema',
    description: 'Procesa datos a velocidades increíbles con nuestra infraestructura optimizada'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
    title: 'Seguridad Total',
    description: 'Protección de nivel empresarial con encriptación de última generación'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>',
    title: 'IA Integrada',
    description: 'Inteligencia artificial que aprende y se adapta a tus necesidades'
  }
]

const testimonials = [
  {
    name: 'María González',
    role: 'CEO, TechStart',
    text: 'Increíble plataforma que transformó completamente nuestro flujo de trabajo. Los resultados superaron todas nuestras expectativas.'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Director, InnovateLab',
    text: 'La mejor inversión que hemos hecho. El retorno fue inmediato y el soporte técnico es excepcional.'
  }
]

const parallaxOffset = computed(() => scrollY.value * 0.5)
const fadeOpacity = computed(() => Math.max(1 - scrollY.value / 500, 0))

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>