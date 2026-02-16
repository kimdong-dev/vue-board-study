<template>
  <div>
    <BoardForm
      v-if="post"
      :initial-data="post"
      :is-edit="true"
      @submit="handleUpdate"
      @cancel="goToDetail"
    />
    <div v-else class="text-center py-12">
      <p class="text-gray-500 text-lg">게시글을 찾을 수 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBoardStore } from '@/stores/board'
import BoardForm from '@/components/BoardForm.vue'

const route = useRoute()
const router = useRouter()
const boardStore = useBoardStore()

const post = ref(null)

onMounted(() => {
  boardStore.fetchPosts()
  post.value = boardStore.getPostById(route.params.id)
})

const handleUpdate = (formData) => {
  boardStore.updatePost(route.params.id, formData)
  router.push(`/board/${route.params.id}`)
}

const goToDetail = () => {
  router.push(`/board/${route.params.id}`)
}
</script>
