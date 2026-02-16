import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBoardStore = defineStore('board', () => {
  const posts = ref([])
  const STORAGE_KEY = 'vue-board-posts'

  // 초기 더미 데이터
  const initializePosts = () => {
    const dummyPosts = [
      {
        id: '1',
        title: 'Vue 3 시작하기',
        content: 'Vue 3의 Composition API를 사용하여 더 유연하고 재사용 가능한 코드를 작성할 수 있습니다.',
        author: '김철수',
        createdAt: new Date('2024-01-15').toISOString(),
        updatedAt: null
      },
      {
        id: '2',
        title: 'Pinia 상태 관리',
        content: 'Pinia는 Vue 3를 위한 공식 상태 관리 라이브러리입니다. Vuex보다 간단하고 TypeScript 지원이 우수합니다.',
        author: '이영희',
        createdAt: new Date('2024-01-20').toISOString(),
        updatedAt: null
      },
      {
        id: '3',
        title: 'Tailwind CSS 활용',
        content: 'Tailwind CSS를 사용하면 유틸리티 클래스만으로 빠르게 스타일링할 수 있습니다.',
        author: '박민수',
        createdAt: new Date('2024-02-01').toISOString(),
        updatedAt: null
      }
    ]
    return dummyPosts
  }

  // LocalStorage에서 게시글 로드
  const loadPosts = () => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      posts.value = JSON.parse(saved)
    } else {
      posts.value = initializePosts()
      savePosts()
    }
  }

  // LocalStorage에 게시글 저장
  const savePosts = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts.value))
  }

  // 게시글 목록 가져오기
  const fetchPosts = () => {
    loadPosts()
    return posts.value
  }

  // ID로 게시글 찾기
  const getPostById = (id) => {
    return posts.value.find(post => post.id === id)
  }

  // 새 게시글 작성
  const createPost = (postData) => {
    const newPost = {
      id: Date.now().toString(),
      title: postData.title,
      content: postData.content,
      author: postData.author,
      createdAt: new Date().toISOString(),
      updatedAt: null
    }
    posts.value.unshift(newPost)
    savePosts()
    return newPost
  }

  // 게시글 수정
  const updatePost = (id, postData) => {
    const index = posts.value.findIndex(post => post.id === id)
    if (index !== -1) {
      posts.value[index] = {
        ...posts.value[index],
        title: postData.title,
        content: postData.content,
        author: postData.author,
        updatedAt: new Date().toISOString()
      }
      savePosts()
      return posts.value[index]
    }
    return null
  }

  // 게시글 삭제
  const deletePost = (id) => {
    const index = posts.value.findIndex(post => post.id === id)
    if (index !== -1) {
      posts.value.splice(index, 1)
      savePosts()
      return true
    }
    return false
  }

  // 검색 기능
  const searchPosts = (keyword) => {
    if (!keyword) return posts.value
    return posts.value.filter(post =>
      post.title.toLowerCase().includes(keyword.toLowerCase()) ||
      post.content.toLowerCase().includes(keyword.toLowerCase()) ||
      post.author.toLowerCase().includes(keyword.toLowerCase())
    )
  }

  // 게시글 총 개수
  const totalPosts = computed(() => posts.value.length)

  return {
    posts,
    totalPosts,
    fetchPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    searchPosts
  }
})
