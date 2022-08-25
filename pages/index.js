import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/NavBar';

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
        <h1> Hello! </h1>
      </main>

      <footer className={styles.footer}>
      {/* Restart Button and Confirm Creature Button here */}
      </footer>
    </div>
  )
}
