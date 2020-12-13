import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Flex, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';
import styles from '../styles/Home.module.css'


export default function Home() {
  const router = useRouter()
  const result = router.query.result;
  console.log('🚀 ~ file: explanation.js ~ line 8 ~ Home ~ router', router.query.result);

  return (
    <div className={styles.container}>
      <Head>
        <title>Niosh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>
          Resultados
        </h1>
        <h2>
          índice de levantamiento (IL): <strong style={{color: "red"}}>{result}</strong>
        </h2>
        <p>Conclusión</p>
        {
          result <= 1.0 
          ? <h4>No representa un riesgo significativo para la mayoría de los trabajadores</h4>
          : result > 1.0 && result < 3.0
          ? <h4>Representa un incremento del riesgo de lesiones de la zona baja de la espalda para una parte de la población laboral</h4>
          : <h4>Representa un riesgo para la mayoría de trabajadores</h4>
        }
      </main>
      <Link href='/'>Volver</Link>
    </div>
  )
}
