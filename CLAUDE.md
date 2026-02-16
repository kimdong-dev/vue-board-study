# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Vue 3 + TypeScript + Vite 기반의 게시판 학습 프로젝트입니다. 게시판 CRUD 기능을 중심으로 Vue 3의 Composition API, Vue Router, Pinia 상태 관리를 학습하는 것이 목적입니다.

## 개발 명령어

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 타입 체크만 실행
npm run type-check

# 유닛 테스트 (Vitest watch 모드)
npm run test:unit

# 린팅 (Oxlint + ESLint)
npm run lint
```

## 기술 스택

- **프레임워크**: Vue 3.5+ (Composition API)
- **라우터**: Vue Router 5
- **상태 관리**: Pinia 3
- **빌드 도구**: Vite 7
- **스타일링**: TailwindCSS 4
- **테스팅**: Vitest + @vue/test-utils
- **린팅**: Oxlint (1차) + ESLint (2차) - `npm run lint`는 oxlint 실행 후 eslint 실행
- **타입 체크**: TypeScript 5.9 + vue-tsc

## 프로젝트 구조

```
src/
├── views/          # 페이지 컴포넌트 (라우트와 1:1 매칭)
│   ├── HomeView.vue
│   ├── BoardListView.vue      # 게시글 목록
│   ├── BoardDetailView.vue    # 게시글 상세
│   ├── BoardCreateView.vue    # 게시글 작성
│   └── BoardEditView.vue      # 게시글 수정
├── components/     # 재사용 가능한 컴포넌트
│   ├── BoardList.vue          # 게시글 목록 컴포넌트
│   ├── BoardItem.vue          # 게시글 아이템 컴포넌트
│   ├── BoardDetail.vue        # 게시글 상세 컴포넌트
│   └── BoardForm.vue          # 게시글 작성/수정 폼
├── stores/         # Pinia 스토어
│   ├── counter.ts             # 예제 스토어 (Composition API 스타일)
│   └── board.js               # 게시판 스토어
├── router/         # Vue Router 설정
│   └── index.ts
└── assets/         # 정적 자산 (CSS, 이미지)
```

### 라우팅 구조

- `/` - 홈
- `/board` - 게시글 목록
- `/board/create` - 게시글 작성
- `/board/:id` - 게시글 상세
- `/board/:id/edit` - 게시글 수정

### 주요 설정

- **별칭(Alias)**: `@` → `src/` (예: `@/components/BoardList.vue`)
- **Node 버전**: ^20.19.0 || >=22.12.0

## 언어 및 커밋 규칙

- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **이 문서(CLAUDE.md)**: 한국어로 유지

## 작업 방식

- 기본 실행 환경은 production (prd)
- 작업 전 변경 범위를 먼저 설명
- 대규모 변경 시 plan mode로 먼저 검토
- 함수/클래스 단위로 작업 요청
- 기존 코드 스타일 유지
- 불필요한 파일 생성 금지
