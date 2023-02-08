import '@/styles/main.scss'
import variables from '@/styles/base/alias.module.scss'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} colors={{...variables}}/>
}
