import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/NavBar';
import { DisplayCreature } from '../components/DisplayCreature';
import { StatBlock } from '../components/StatBlock';
import dynamic from 'next/dynamic'
import { Suspense } from 'react'


const DynamicHeader = dynamic(() => import('../components/DisplayCreature.js').then((mod) => mod.DisplayCreature), {
  suspense: true,
  ssr: false
})

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sidekick Creator</title>
        <meta name="description" content="A web app that makes creating 5th edition sidekicks easy!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>

      <main className={styles.main}>
        
      <Suspense fallback={`Loading...`}>
        <DynamicHeader />
        <DisplayCreature/>
      </Suspense>  
        
      </main>

    </div>
  )
}
