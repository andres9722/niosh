import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Box, Flex, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()

    router.push(`/explanation?result=44.7`)

   
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Niosh</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ergonomía</h1>
        <Link href='/explanation'>Explicación</Link>

        <Box as='form' sx={{width: '20vw'}} onSubmit={handleSubmit} py={3}>
          <Flex mx={-2} mb={3}>
            <Box width="100%" px={2}>
              <Label htmlFor='name'>Name</Label>
              <Input type="number" id='name' name='name'/>
            </Box>
          </Flex>
          <Flex mx={-2} flexWrap='wrap'>
            <Box px={2} ml='auto'>
              <Button>Beep</Button>
            </Box>
          </Flex>
        </Box>
      </main>
    </div>
  );
}
