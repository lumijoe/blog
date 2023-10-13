// pages/blog/index.js(ブログページをblogディレクトリで管理する)

import Hero from '@/components/Hero'
import Link from 'next/link';

export default function Blog() {
    return (
        <div>
            <Hero />
            <p style={{
                backgroundColor: '#9999CC',
                color: 'white'
            }}>This is BLOG page.</p>
            <Link href='/about'>
                ABOUTへ
            </Link>
        </div>
    )
}