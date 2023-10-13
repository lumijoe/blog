// pages/index.js(トップページ)
/*
  (ディレクトリで重要なpublicとpages)
  -public配下(ファイルなどブラウザからURL入力でアクセスできる/--.svgなど)
  -pages 配下(Webページの追加、URL入力でアクセスできる/aboutなど)
*/

// 絶対パス＋エイリアスで指定(管理性重視でjsconfig.jsonを記述)
import Hero   from "@/components/Hero"

export default function Home() {
  return (
    // ヘッダーとフッターをまとめたLayoutでHeroを囲むのは_app.jsでimport済み
    <Hero 
        title="HOME"
        subtitle="テスト開発サイトページ"
        minititle="minititle"
        imageOn
    />
  )
}


/* 1010
  ・CSSはBootstrap？
  ・about.jsの利用？
  ・仕様：sytle={{キャメルケースオブジェクト: ''}}
  ・Figmaデザインデータを参照
*/

/* 1013
  ・<div>したくない時<>(<fragment>を省略）
  ・/componentsでheader, hero(main), footerコンポーネント作成
  ・/pagesでコンポーネントをindex.jsでインポート
  ・importパスの絶対パス設定+@エイリアス設定（jsconfig.jsをデフォルトから書き換え）
  ・header,footerを/components/layoutコンポーネントとしてまとめる
  ・/pages/index.jsのimportをlayout仕様へ書き換え
  ・Layoutコンポーネントを全ページで適用させるためのカスタムAppの準備pages/_app.js
  ・カスタムMyAppの中でLayoutコンポーネントを読み込ませる
  ・/pages/_app.jsでLayoutをimportのため、index.jsのimportは削除しておく
*/

/* 1014-1016
  ・


*/