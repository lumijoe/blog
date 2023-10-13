// about.js(アバウトページ)

import Hero from '@/components/Hero'

export default function About() {
  return (
    <div>
      <Hero />
      <p style={{
         backgroundColor: 'lightblue',
         color: 'white'
      }}>This is ABOUT page.</p>
      <a href='/blog'
               style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '3px 18px',
                    boxSizing: 'border-box',
                    border: '1px black solid',
                    textDecoration: 'none',
                    borderRadius: '9999px'
               }}>BLOGへ</a>
    </div>
    
  )
}
