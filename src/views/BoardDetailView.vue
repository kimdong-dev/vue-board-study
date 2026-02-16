<template>
  <div>
    <BoardDetail
      :post="post"
      @edit="goToEdit"
      @delete="handleDelete"
      @back="goToList"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBoardStore } from '@/stores/board'
import BoardDetail from '@/components/BoardDetail.vue'

const route = useRoute()
const router = useRouter()
const boardStore = useBoardStore()

const post = ref(null)

onMounted(() => {
  boardStore.fetchPosts()
  post.value = boardStore.getPostById(route.params.id)
})

const goToEdit = () => {
  router.push(`/board/${route.params.id}/edit`)
}

const handleDelete = () => {
  boardStore.deletePost(route.params.id)
  router.push('/board')
}

const goToList = () => {
  router.push('/board')
}
</script>
