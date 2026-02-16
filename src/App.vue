<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <RouterLink to="/" class="text-2xl font-bold text-blue-600 hover:text-blue-700">
              Vue Board
            </RouterLink>
          </div>
          <div class="flex space-x-4">
            <RouterLink
              to="/"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              :class="{ 'text-blue-600 bg-gray-100': $route.path === '/' }"
            >
              홈
            </RouterLink>
            <RouterLink
              to="/board"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              :class="{ 'text-blue-600 bg-gray-100': $route.path.startsWith('/board') }"
            >
              게시판
            </RouterLink>
          </div>
        </div> 
      </div> 
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <RouterView />
    </main>

    <footer class="bg-white border-t mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-center text-gray-500 text-sm">
          Vue 3 + Pinia + Vue Router + Tailwind CSS
        </p>
      </div>
    </footer>
  </div>
</template>
