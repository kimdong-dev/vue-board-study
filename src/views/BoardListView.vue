<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">게시판</h1>
      <router-link
        to="/board/create"
        class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
      >
        글쓰기
      </router-link>
    </div>

    <BoardList @select="goToDetail" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBoardStore } from '@/stores/board'
import BoardList from '@/components/BoardList.vue'

const router = useRouter()
const boardStore = useBoardStore()

onMounted(() => {
  boardStore.fetchPosts()
})

const goToDetail = (postId) => {
  router.push(`/board/${postId}`)
}
</script>
