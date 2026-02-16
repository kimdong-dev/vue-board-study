<template>
  <div>
    <BoardForm
      @submit="handleCreate"
      @cancel="goToList"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useBoardStore } from '@/stores/board'
import BoardForm from '@/components/BoardForm.vue'

const router = useRouter()
const boardStore = useBoardStore()

const handleCreate = (formData) => {
  boardStore.createPost(formData)
  router.push('/board')
}

const goToList = () => {
  router.push('/board')
}
</script>
