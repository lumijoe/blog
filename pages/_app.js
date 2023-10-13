// pages/_app.jsでlayoutを全ページに適用させるカスタムAppコンポーネント
// その中にLayoutコンポーネントを追加し、全ページに表示させる仕様

import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp

// 共通設定したくないページの設定は拡張コンポーネントを作成する