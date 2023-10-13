// components/hero.js(ヒーローコンポーネント)
// Heroコンポーネントのtitle,subtitleはページによりテキストを変更

// imageOn=false にしておいて、必要なページでimageOnを記述でtrueにして表示
export default function Hero({ title, subtitle, minititle, imageOn = false }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{minititle}</p>
            { imageOn && <figure> [画像] </figure> }
        </div>
    )
}