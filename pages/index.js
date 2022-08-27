import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/NavBar';
import { DisplayCreature } from '../components/DisplayCreature';
import { StatBlock } from '../components/StatBlock';

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
        <DisplayCreature/>
      </main>

    </div>
  )
}
