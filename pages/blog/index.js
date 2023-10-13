// pages/blog/index.js(ブログページをblogディレクトリで管理する)

import Hero from '@/components/Hero'
import Link from 'next/link';

export default function Blog() {
    return (
        <div>
            <Hero
                title="BLOG"
                subtitle="Blogページ"
                minititle="minititle"
            />    
        </div>
    )
}

/*
    <p style={{
        backgroundColor: '#9999CC',
        color: 'white'
    }}>This is BLOG page.</p>
    <Link href='/about'
            style={{
            backgroundColor: '#232323',
            boxSizing: 'border-box',
            borderRadius: '9999px',
            color: 'white',
            padding: '8px 13px',
            textDecoration: 'none',
            }}>
        ABOUTへ
    </Link>
*/
