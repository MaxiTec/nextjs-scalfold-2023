import { Inter } from '@next/font/google'

import styles from './home.module.scss'

const inter = Inter({ subsets: ['latin'] })

const Home = (props) => {
  return (
    <div className={styles.main}>
      <div className="row pl-20 pr-20 center-xs">
        <div className="col-xs-12 text-center">
          <h1
            style={{ fontSize: 26 }}
            className={`${inter.className}`}
          >
            Welcome to the Next Oasis Layout
          </h1>
          <p>Take a look at mixins, utils and variables, before you begin</p>
        </div>
        <div className="col-xs-12 text-center">
          <small>
            Prueba cambiando el color de la variable{' '}
            <span style={{ color: props.colors.primaryColor }}>$primary-color</span>
          </small>
        </div>
        <div className="col-xs-12 col-md-5 text-center">
          <button className={`mb-8 mr-12 round-lg ${styles.button} ${inter.className}`}>
            Hello
          </button>
          <button className={styles.button2}>World!</button>
        </div>
      </div>
      {/* <button className={styles.triangle}>HOLA</button> */}
    </div>
  )
}

export default Home
