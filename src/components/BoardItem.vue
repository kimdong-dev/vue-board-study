<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
       @click="$emit('click')">
    <h3 class="text-xl font-bold text-gray-800 mb-2">{{ post.title }}</h3>
    <p class="text-gray-600 mb-4 line-clamp-2">{{ post.content }}</p>
    <div class="flex justify-between items-center text-sm text-gray-500">
      <span class="font-medium">{{ post.author }}</span>
      <span>{{ formatDate(post.createdAt) }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
