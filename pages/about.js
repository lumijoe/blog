// about.js(アバウトページ)

import Hero from '@/components/Hero'
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Hero />
      <p style={{
         backgroundColor: 'lightblue',
         color: 'white'
      }}>This is ABOUT page.</p>
      <Link href='/blog'>
        BLOGへ
      </Link>
    </div>
  )
}
