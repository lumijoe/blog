// components/hero.js(ヒーローコンポーネント)
// Heroコンポーネントのtitle,subtitleはページによりテキストを変更

// imageOn=false にしておいて、必要なページでimageOnを記述でtrueにして表示
export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            { imageOn && <figure> [画像] </figure> }
        </div>
    )
}