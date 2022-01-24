if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
