// components/layout.js(レイアウトコンポーネント)

import Header from '@/components/Header'
import Footer from '@/components/Footer'

// props.childrenとして受け取る
export default function Layout({ children }) {
    return (
        <>
            <Header />

            <main>{children}</main>

            <Footer />
        </>
    )
}