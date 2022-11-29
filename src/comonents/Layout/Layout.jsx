import Main from '../Main'
import Nav from '../Nav'
import Footer from '../Footer'


export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

