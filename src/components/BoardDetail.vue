<template>
  <div v-if="post" class="bg-white rounded-lg shadow-md p-8">
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
      <div class="flex justify-between items-center text-sm text-gray-500 border-b pb-4">
        <span class="font-medium text-base">작성자: {{ post.author }}</span>
        <div class="text-right">
          <div>작성일: {{ formatDate(post.createdAt) }}</div>
          <div v-if="post.updatedAt" class="text-xs mt-1">
            수정일: {{ formatDate(post.updatedAt) }}
          </div>
        </div>
      </div>
    </div>

    <div class="prose max-w-none mb-8">
      <p class="text-gray-700 whitespace-pre-wrap leading-relaxed">{{ post.content }}</p>
    </div>

    <div class="flex gap-3 justify-end border-t pt-6">
      <button
        @click="$emit('edit')"
        class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        수정
      </button>
      <button
        @click="handleDelete"
        class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        삭제
      </button>
      <button
        @click="$emit('back')"
        class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        목록으로
      </button>
    </div>
  </div>

  <div v-else class="text-center py-12">
    <p class="text-gray-500 text-lg">게시글을 찾을 수 없습니다.</p>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['edit', 'delete', 'back'])

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const handleDelete = () => {
  if (confirm('정말로 삭제하시겠습니까?')) {
    emit('delete')
  }
}
</script>
