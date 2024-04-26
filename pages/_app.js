import Layout from '../components/Layout'
import '../styles/globals.css'

//kell she byen7at hon bell app general 3ala mestawa kel l application
function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
