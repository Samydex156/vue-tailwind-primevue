<template>
  <div class="bg-white text-slate-900 overflow-hidden">
    <!-- Navigation -->
    <nav
      :class="[
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrollY > 50 ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-purple-100' : 'bg-transparent'
      ]"
    >
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Lumina
          </span>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-8 items-center">
          <button
            v-for="item in menuItems"
            :key="item"
            @click="scrollToSection(item)"
            class="capitalize text-slate-700 hover:text-purple-600 transition-colors font-medium"
          >
            {{ item }}
          </button>
          <button class="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-300 transition-all">
            Comenzar
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
      <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-purple-100">
        <div class="flex flex-col p-6 gap-4">
          <button
            v-for="item in menuItems"
            :key="item"
            @click="scrollToSection(item)"
            class="capitalize text-left hover:text-purple-600 transition-colors py-2 font-medium"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      id="inicio"
      class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40"
          :style="{ transform: `translate(${parallaxOffset}px, ${parallaxOffset * 0.8}px)` }"
        />
        <div
          class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full blur-3xl opacity-40"
          :style="{ transform: `translate(${-parallaxOffset * 0.6}px, ${-parallaxOffset}px)` }"
        />
        <div
          class="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-200 to-orange-200 rounded-full blur-3xl opacity-30"
          :style="{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0003})` }"
        />
      </div>

      <div class="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div
          class="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium"
          :style="{ transform: `translateY(${-scrollY * 0.3}px)`, opacity: fadeOpacity }"
        >
          <span class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
          Nuevas funcionalidades disponibles
        </div>
        
        <h1
          class="text-6xl md:text-8xl font-black mb-8 leading-tight"
          :style="{ transform: `translateY(${-scrollY * 0.2}px)`, opacity: fadeOpacity }"
        >
          Diseña el Futuro
          <span class="block mt-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Con Brillantez
          </span>
        </h1>
        
        <p
          class="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          :style="{ transform: `translateY(${-scrollY * 0.15}px)`, opacity: fadeOpacity }"
        >
          Crea experiencias excepcionales que inspiran y transforman. 
          Herramientas poderosas al alcance de tu creatividad.
        </p>
        
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
          :style="{ transform: `translateY(${-scrollY * 0.1}px)`, opacity: fadeOpacity }"
        >
          <button
            @click="scrollToSection('servicios')"
            class="group px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-300 transition-all flex items-center gap-3"
          >
            Explorar Ahora
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            @click="scrollToSection('demo')"
            class="group px-10 py-4 bg-white border-2 border-purple-300 text-purple-700 rounded-full font-bold text-lg hover:bg-purple-50 transition-all flex items-center gap-3"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ver Demo
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div
            v-for="stat in stats"
            :key="stat.value"
            class="text-center"
          >
            <div class="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {{ stat.value }}
            </div>
            <div class="text-sm text-slate-600 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div
        class="absolute bottom-32 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 blur-sm"
        :style="{ transform: `rotate(${scrollY * 0.1}deg) translateY(${parallaxOffset * 0.5}px)` }"
      />
      <div
        class="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-sm"
        :style="{ transform: `rotate(${-scrollY * 0.15}deg) translateY(${parallaxOffset * 0.3}px)` }"
      />
    </section>

    <!-- Services Section -->
    <section id="servicios" class="py-32 px-6 relative bg-gradient-to-b from-white to-purple-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <span class="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            NUESTROS SERVICIOS
          </span>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-slate-900">
            Todo lo que
            <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Necesitas
            </span>
          </h2>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluciones integrales diseñadas para impulsar tu éxito
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group relative bg-white p-8 rounded-3xl shadow-lg shadow-purple-100 hover:shadow-2xl hover:shadow-purple-200 transition-all duration-500 hover:-translate-y-3 border border-purple-100"
          >
            <div
              class="absolute top-0 left-0 w-full h-2 rounded-t-3xl bg-gradient-to-r"
              :class="service.gradient"
            />
            <div
              class="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform"
              :class="service.gradient"
              v-html="service.icon"
            />
            <h3 class="text-2xl font-bold mb-4 text-slate-900">{{ service.title }}</h3>
            <p class="text-slate-600 leading-relaxed mb-6">{{ service.description }}</p>
            <button class="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              Saber más
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Section -->
    <section id="demo" class="py-32 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span class="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
              EXPERIENCIA VISUAL
            </span>
            <h2 class="text-5xl md:text-6xl font-black mb-6 text-slate-900">
              Interfaz
              <span class="block bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                Intuitiva
              </span>
            </h2>
            <p class="text-xl text-slate-600 mb-8 leading-relaxed">
              Diseñada para que puedas concentrarte en lo que realmente importa: 
              crear experiencias extraordinarias sin complicaciones.
            </p>
            <ul class="space-y-4">
              <li
                v-for="feature in demoFeatures"
                :key="feature"
                class="flex items-center gap-3 text-slate-700"
              >
                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="font-medium">{{ feature }}</span>
              </li>
            </ul>
          </div>
          <div class="relative">
            <div class="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl shadow-purple-200">
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <div class="flex gap-2 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div class="space-y-3">
                  <div class="h-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-3/4"></div>
                  <div class="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-full"></div>
                  <div class="h-4 bg-gradient-to-r from-pink-200 to-orange-200 rounded w-5/6"></div>
                  <div class="grid grid-cols-3 gap-3 mt-6">
                    <div class="h-20 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl"></div>
                    <div class="h-20 bg-gradient-to-br from-blue-300 to-purple-300 rounded-xl"></div>
                    <div class="h-20 bg-gradient-to-br from-pink-300 to-orange-300 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-2xl"></div>
            <div class="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonios" class="py-32 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <span class="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            TESTIMONIOS
          </span>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-slate-900">
            Amado por
            <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Creadores
            </span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white p-8 rounded-3xl shadow-lg shadow-purple-100 border border-purple-100 hover:shadow-xl transition-all"
          >
            <div class="flex gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <p class="text-slate-700 mb-6 leading-relaxed">"{{ testimonial.text }}"</p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br" :class="testimonial.avatarGradient"></div>
              <div>
                <div class="font-bold text-slate-900">{{ testimonial.name }}</div>
                <div class="text-sm text-slate-500">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contacto" class="py-32 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h2 class="text-5xl md:text-7xl font-black mb-6">
          Comienza Tu
          <span class="block">Transformación Hoy</span>
        </h2>
        <p class="text-xl md:text-2xl mb-12 text-purple-100">
          Únete a miles de creadores que ya están construyendo el futuro
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="group px-12 py-5 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-purple-50 transition-all flex items-center justify-center gap-3">
            Comenzar Gratis
            <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button class="px-12 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            Agendar Demo
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-50 py-16 px-6 border-t border-purple-100">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Lumina
              </span>
            </div>
            <p class="text-slate-600 text-sm">
              Creando experiencias excepcionales para el mundo digital.
            </p>
          </div>
          <div>
            <h4 class="font-bold text-slate-900 mb-4">Producto</h4>
            <ul class="space-y-2 text-slate-600 text-sm">
              <li><a href="#" class="hover:text-purple-600 transition-colors">Características</a></li>
              <li><a href="#" class="hover:text-purple-600 transition-colors">Precios</a></li>
              <li><a href="#" class="hover:text-purple-600 transition-colors">Integraciones</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-slate-900 mb-4">Empresa</h4>
            <ul class="space-y-2 text-slate-600 text-sm">
              <li><a href="#" class="hover:text-purple-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" class="hover:text-purple-600 transition-colors">Carreras</a></li>
              <li><a href="#" class="hover:text-purple-600 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-slate-900 mb-4">Legal</h4>
            <ul class="space-y-2 text-slate-600 text-sm">
              <li><a href="#" class="hover:text-purple-600 transition-colors">Privacidad</a></li>
              <li><a href="#" class="hover:text-purple-600 transition-colors">Términos</a></li>
              <li><a href="#" class="hover:text-purple-600 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-purple-100 pt-8 text-center text-slate-600 text-sm">
          <p>&copy; 2024 Lumina. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>