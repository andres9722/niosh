import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  console.log('🚀 ~ file: explanation.js ~ line 8 ~ Home ~ router', router)

  return (
    <div className={styles.container}>
      <Head>
        <title>Niosh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Explicación
        </h1>
      </main>
    </div>
  )
}
