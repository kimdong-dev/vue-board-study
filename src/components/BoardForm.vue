<template>
  <div class="bg-white rounded-lg shadow-md p-8">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">
      {{ isEdit ? '게시글 수정' : '새 게시글 작성' }}
    </h2>

    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 font-medium mb-2">제목</label>
        <input
          id="title"
          v-model="formData.title"
          type="text"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="제목을 입력하세요"
        />
      </div>

      <div class="mb-4">
        <label for="author" class="block text-gray-700 font-medium mb-2">작성자</label>
        <input
          id="author"
          v-model="formData.author"
          type="text"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="작성자명을 입력하세요"
        />
      </div>

      <div class="mb-6">
        <label for="content" class="block text-gray-700 font-medium mb-2">내용</label>
        <textarea
          id="content"
          v-model="formData.content"
          required
          rows="10"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="내용을 입력하세요"
        ></textarea>
      </div>

      <div class="flex gap-3 justify-end">
        <button
          type="submit"
          class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          {{ isEdit ? '수정하기' : '작성하기' }}
        </button>
        <button
          type="button"
          @click="$emit('cancel')"
          class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
        >
          취소
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({
      title: '',
      content: '',
      author: ''
    })
  },
  isEdit: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['submit', 'cancel'])

const formData = reactive({
  title: props.initialData.title,
  content: props.initialData.content,
  author: props.initialData.author
})

watch(() => props.initialData, (newData) => {
  formData.title = newData.title
  formData.content = newData.content
  formData.author = newData.author
}, { deep: true })

const handleSubmit = () => {
  emit('submit', { ...formData })
}
</script>
