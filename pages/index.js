// index.js(トップページ)

/*
  (ディレクトリで重要なpublicとpages)
  -public配下(ファイルなどブラウザからURL入力でアクセスできる/--.svgなど)
  -pages 配下(Webページの追加、URL入力でアクセスできる/aboutなど)
*/
export default function Home() {
  return (
    <div className="hero">
      <h1 style={{ color: 'red', fontSize: '80px' }}>CUBE</h1>
      <hr />
      <p>アウトプットしていく開発練習用サイト</p>
    </div>
  )
}

/* 1010
  ・CSSはBootstrap？
  ・about.jsの利用？
  ・仕様：sytle={{キャメルケースオブジェクト: ''}}
  ・Figmaデザインデータを参照
*/