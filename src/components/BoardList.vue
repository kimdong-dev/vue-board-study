<template>
  <div><!-- 주석 dev--><!--또 수정-->
    <div class="mb-6">
      <input
        v-model="searchKeyword"
        type="text"
        placeholder="검색어를 입력하세요..."
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div v-if="filteredPosts.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">게시글이 없습니다.</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BoardItem
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
        @click="$emit('select', post.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BoardItem from './BoardItem.vue'
import { useBoardStore } from '@/stores/board'

const boardStore = useBoardStore()
const searchKeyword = ref('')

defineEmits(['select'])

const filteredPosts = computed(() => {
  return boardStore.searchPosts(searchKeyword.value)
})
</script>
