// pages/blog/index.js(ブログページをblogディレクトリで管理する)

import Hero from '@/components/Hero'

export default function Blog() {
    return (
        <div>
            <Hero />
            <p style={{
                backgroundColor: '#9999CC',
                color: 'white'
            }}>This is BLOG page.</p>
            <a href='/about'
               style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '3px 18px',
                    boxSizing: 'border-box',
                    border: '1px black solid',
                    textDecoration: 'none',
                    borderRadius: '9999px'
               }}>ABOUTへ</a>
        </div>
    )
}