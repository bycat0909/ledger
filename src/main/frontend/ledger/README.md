This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


```
Next.Js 폴더구조

/app: 애플리케이션에 대한 모든 경로, 구성 요소 및 논리가 포함되어 있으며 여기서 주로 작업하게 됩니다.
/app/lib: 재사용 가능한 유틸리티 함수, 데이터 가져오기 함수 등 애플리케이션에서 사용되는 함수가 포함되어 있습니다.
/app/ui: 카드, 테이블, 양식 등 애플리케이션의 모든 UI 구성 요소가 포함되어 있습니다. 시간을 절약하기 위해 이러한 구성 요소의 스타일이 미리 지정되어 있습니다.
/public: 이미지와 같은 애플리케이션의 모든 정적 자산을 포함합니다.
/scripts: 이후 장에서 데이터베이스를 채우는 데 사용할 시드 스크립트가 포함되어 있습니다.
구성 파일next.config.js : 애플리케이션 루트에 구성 파일도 있습니다 . 이러한 파일의 대부분은 를 사용하여 새 프로젝트를 시작할 때 생성되고 사전 구성됩니다 create-next-app. 이 과정에서는 수정할 필요가 없습니다.


/* 
메뉴는.... 몇뎁스로 할까..
ROOT
    - 메인카테
        - 상세카테
            - 글

styles/global.css 
Global Css는 전역적인 스타일링에 사용됨
li 태그의 기본 스타일이나
a 태그의 기본 스타일 등
기본 폰트 등
*/

html, body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

clsx 클래스이름 편하게 변경하는 라이브러리 => 아직 사용안함

```