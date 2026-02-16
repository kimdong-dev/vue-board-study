<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Vue 3 게시판 스터디</h1>
    <p class="text-lg text-gray-600 mb-8">
      Vue 3, Pinia, Vue Router, Tailwind CSS를 활용한 간단한 게시판 애플리케이션
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-3xl mb-2">📝</div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">CRUD 기능</h3>
        <p class="text-gray-600">게시글 생성, 조회, 수정, 삭제</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-3xl mb-2">🔍</div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">검색 기능</h3>
        <p class="text-gray-600">제목, 내용, 작성자 검색</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-3xl mb-2">💾</div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">데이터 영속성</h3>
        <p class="text-gray-600">LocalStorage 활용</p>
      </div>
    </div>

    <div class="bg-blue-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">게시판 현황</h2>
      <p class="text-lg text-gray-700 mb-6">
        총 <span class="font-bold text-blue-600">{{ totalPosts }}</span>개의 게시글
      </p>
      <router-link
        to="/board"
        class="inline-block px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
      >
        게시판 바로가기
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useBoardStore } from '@/stores/board'

const boardStore = useBoardStore()

onMounted(() => {
  boardStore.fetchPosts()
})

const totalPosts = computed(() => boardStore.totalPosts)
</script>
