# Vue 프로젝트 학습 경로

## Context

사용자가 vue-board-study 프로젝트의 소스 코드를 분석하면서 Vue 구조를 체계적으로 학습하고자 합니다. 이 프로젝트는 Vue 3 Composition API, Pinia 상태 관리, Vue Router를 사용한 게시판 CRUD 애플리케이션입니다. 수정 testtest1

## 추천 학습 순서

### 1단계: 프로젝트 진입점 이해 (기초)

**목표**: Vue 애플리케이션이 어떻게 시작되고 초기화되는지 이해

1. **`index.html`** (프로젝트 루트)
   - HTML 엔트리 포인트
   - `<div id="app">` 마운트 지점 확인

2. **`src/main.ts`**
   - Vue 앱 생성 (`createApp`)
   - Pinia 스토어 연결 (`createPinia`)
   - Vue Router 연결
   - 앱 마운트 (`app.mount('#app')`)

3. **`src/App.vue`**
   - 최상위 컴포넌트
   - 전역 레이아웃 (네비게이션, 푸터)
   - `<RouterView>` 동작 방식
   - TailwindCSS 클래스 사용법

### 2단계: 라우팅 구조 이해 (중급)

**목표**: Vue Router로 페이지 간 이동이 어떻게 이루어지는지 이해

4. **`src/router/index.ts`**
   - 라우트 정의 (`path`, `name`, `component`)
   - 게시판 CRUD 라우트 구조
   - 동적 라우트 파라미터 (`:id`)

### 3단계: 상태 관리 이해 (중급)

**목표**: Pinia로 전역 상태를 어떻게 관리하는지 이해

5. **`src/stores/counter.ts`** (간단한 예제)
   - Composition API 스타일 스토어
   - `ref` (반응형 상태)
   - `computed` (계산된 값)
   - 함수로 상태 변경

6. **`src/stores/board.js`** (실제 사용 예제)
   - 게시글 상태 관리
   - CRUD 함수들 (`createPost`, `updatePost`, `deletePost`)
   - LocalStorage 연동
   - 검색 기능
   - Computed 속성 (`totalPosts`)

### 4단계: View 컴포넌트 이해 (페이지 레벨)

**목표**: 각 페이지가 어떻게 구성되고 스토어/라우터와 상호작용하는지 이해

7. **`src/views/BoardListView.vue`** (목록 페이지)
   - `<script setup>` 문법
   - `onMounted` 생명주기 훅
   - 스토어 사용 (`useBoardStore`)
   - 라우터 사용 (`useRouter`)
   - 자식 컴포넌트 연동 (`BoardList`)

8. **`src/views/BoardDetailView.vue`** (상세 페이지)
   - 라우트 파라미터 받기 (`route.params.id`)
   - 단일 게시글 조회

9. **`src/views/BoardCreateView.vue`** (작성 페이지)
   - 폼 데이터 처리
   - 게시글 생성 후 네비게이션

10. **`src/views/BoardEditView.vue`** (수정 페이지)
    - 기존 데이터 로드
    - 게시글 수정

### 5단계: 재사용 컴포넌트 이해 (고급)

**목표**: 컴포넌트 분리와 재사용 패턴 이해

11. **`src/components/BoardList.vue`**
    - Props와 Emit 사용
    - 리스트 렌더링 (`v-for`)
    - 이벤트 전달

12. **`src/components/BoardItem.vue`**
    - Props로 데이터 받기
    - 컴포넌트 간 데이터 흐름

13. **`src/components/BoardDetail.vue`**
    - 상세 정보 표시 컴포넌트

14. **`src/components/BoardForm.vue`**
    - 폼 처리 (작성/수정 공통 사용)
    - v-model 양방향 바인딩
    - 유효성 검사

### 6단계: 스타일링 (선택)

15. **`src/assets/main.css`**
    - TailwindCSS 설정
    - 전역 스타일

### 7단계: 테스트 (선택)

16. **`src/components/__tests__/HelloWorld.spec.ts`**
    - Vitest 테스트 작성 패턴
    - Vue Test Utils 사용법

## 학습 팁

### 핵심 개념 체크리스트

각 파일을 읽으면서 다음을 확인하세요:

- **Vue 3 Composition API**
  - `<script setup>` 문법
  - `ref`, `reactive` (반응형 데이터)
  - `computed` (계산된 속성)
  - 생명주기 훅 (`onMounted`, `onUnmounted`)

- **컴포넌트 통신**
  - Props (부모 → 자식)
  - Emit (자식 → 부모)
  - Provide/Inject (없으면 스킵)

- **Vue Router**
  - `useRouter` (네비게이션)
  - `useRoute` (현재 라우트 정보)
  - `<RouterLink>`, `<RouterView>`
  - 동적 라우트 파라미터

- **Pinia**
  - 스토어 정의 (`defineStore`)
  - 스토어 사용 (`useBoardStore()`)
  - 상태, 액션, Getters(computed)

### 실습 방법

1. 각 파일을 읽으면서 주석으로 이해한 내용 정리
2. 브라우저 개발자 도구의 Vue DevTools로 컴포넌트 구조 확인
3. 코드 일부를 수정해보며 동작 확인 (예: 텍스트 변경, 스타일 수정)
4. 작은 기능 추가해보기 (예: 좋아요 버튼, 조회수 등)

### 흐름 추적 연습

게시글 작성 흐름을 따라가보세요:
1. `BoardCreateView.vue` - 사용자가 폼 작성
2. `BoardForm.vue` - 폼 컴포넌트에서 데이터 입력
3. `stores/board.js` - `createPost()` 호출
4. LocalStorage 저장
5. `router.push('/board')` - 목록으로 이동
6. `BoardListView.vue` - 목록 다시 로드
7. `BoardList.vue` - 새 게시글 표시

## 참고사항

- 이 프로젝트는 백엔드 없이 LocalStorage를 사용합니다
- 더미 데이터는 `stores/board.js`의 `initializePosts()`에 있습니다
- Composition API 스타일을 일관되게 사용합니다
- TailwindCSS를 스타일링에 사용합니다
