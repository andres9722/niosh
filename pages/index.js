import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Box, Flex, Button, Text } from 'rebass';
import { Label, Input } from '@rebass/forms';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target

    const pt = form.pt.value
    const fh = form.fh.value
    const fv = form.fv.value
    const fd = form.fd.value
    const fa = form.fa.value
    const ff = form.ff.value
    const fg = form.fg.value
    const pr = form.pr.value

    const result = pt * fh * fv * fd * fa * ff * fg

    const value = pr / result

    router.push(`/explanation?result=${value}`)
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


        <Text as="p" sx={{fontWeight: '700', margin: '2rem 0', fontSize: '2rem', color: '#0070f3'}}>Peso limite recomendado</Text>

        <Box as='form' sx={{width: '30vw'}} onSubmit={handleSubmit} py={3}>
          <Flex flexDirection="column" mx={-2} mb={3}>
            <Box width="100%" px={2}  mt='2rem'>
              <Label htmlFor='pt'>Peso teórico</Label>
              <Input sx={{border: '1px solid #ccc', marginTop: '0.5rem', borderRadius: '3px', padding: '0.8rem'}} required type="number" id='pt' placeholder="Peso teórico" name='pt'/>
            </Box>
            <Box width="100%" px={2} mt='2rem'>
              <Label htmlFor='fh'>Factor horizontal</Label>
              <Input sx={{border: '1px solid #ccc', marginTop: '0.5rem', borderRadius: '3px', padding: '0.8rem'}} required type="number" id='fh' placeholder="Factor horizontal" name='fh'/>
            </Box>
            <Box width="100%" px={2} mt='2rem'>
              <Label htmlFor='fv'>Factor vertical</Label>
              <Input sx={{border: '1px solid #ccc', marginTop: '0.5rem', borderRadius: '3px', padding: '0.8rem'}} required type="number" id='fv' placeholder="Factor vertical" name='fv'/>
            </Box>
            <Box width="100%" px={2} mt='2rem'>
              <Label htmlFor='fd'>Factor de desplazamiento</Label>
              <Input sx={{border: '1px solid #ccc', marginTop: '0.5rem', borderRadius: '3px', padding: '0.8rem'}} required type="number" id='fd' placeholder="Factor de desplazamiento" name='fd'/>
            </Box>
            <Box width="100%" px={2} mt='2rem'>
              <Label htmlFor='fa'>Factor de asimetría</Label>
              <Input sx={{border: '1px solid #ccc', marginTop: '0.5rem', borderRadius: '3px', padding: '0.8rem'}} required type="number" id='fa' placeholder="Factor de asimetría" name='fa'/>
            </Box>
            <Box width="100%" px={2} mt='2rem'>
              <Label htmlFor='ff'>Factor de frecuencia (levantamientos/minuto)</Label>
              <Input sx={{border: '1px solid #ccc', marginTop: '0.5rem', borderRadius: '3px', padding: '0.8rem'}} required type="number" id='ff' placeholder="Factor de frecuencia" name='ff'/>
            </Box>
            <Box width="100%" px={2} mt='2rem'>
              <Label htmlFor='fg'>Factor de agarre</Label>
              <Input sx={{border: '1px solid #ccc', marginTop: '0.5rem', borderRadius: '3px', padding: '0.8rem'}} required type="number" id='fg' placeholder="Factor de agarre" name='fg'/>
            </Box>
            <Box width="100%" px={2} mt='2rem'>
              <Label htmlFor='pr'>Peso real</Label>
              <Input sx={{border: '1px solid #ccc', marginTop: '0.5rem', borderRadius: '3px', padding: '0.8rem'}} required type="number" id='pr' placeholder="Peso real" name='pr'/>
            </Box>
          </Flex>
          <Flex mx={-2} flexWrap='wrap'>
            <Box px={2} ml='auto'>
              <Button sx={{ background: '#0070f3', padding: '0.8rem 1.6rem', marginTop: '2rem' }}>Calcular</Button>
            </Box>
          </Flex>
        </Box>
      </main>
      <footer>
        <p style={{textAlign: "center"}}>Politecnico Colombiano Jaime Isaza Cadavid</p>
        <p style={{textAlign: "center"}}>FUNDAMENTOS DE ERGONOMÍA - JULIAN ÑAÑEZ RAMOS</p> 
      </footer>
    </div>
  );
}
