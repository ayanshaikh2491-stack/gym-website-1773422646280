import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/page.module.css';

const Page = () => {
  const [memberships, setMemberships] = useState([] as any[]);
  const [services, setServices] = useState([] as any[]);
  const [coaches, setCoaches] = useState([] as any[]);

  useEffect(() => {
    fetch('/api/memberships')
      .then(response => response.json())
      .then(data => setMemberships(data));
  }, []);

  useEffect(() => {
    fetch('/api/services')
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  useEffect(() => {
    fetch('/api/coaches')
      .then(response => response.json())
      .then(data => setCoaches(data));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Gym Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Gym Website</h1>

        <section className={styles.memberships}>
          <h2 className={styles.subtitle}>Memberships</h2>
          <ul>
            {memberships.map((membership, index) => (
              <li key={index}>{membership.name}</li>
            ))}
          </ul>
        </section>

        <section className={styles.services}>
          <h2 className={styles.subtitle}>Services</h2>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service.name}</li>
            ))}
          </ul>
        </section>

        <section className={styles.coaches}>
          <h2 className={styles.subtitle}>Coaches</h2>
          <ul>
            {coaches.map((coach, index) => (
              <li key={index}>{coach.name}</li>
            ))}
          </ul>
        </section>

        <Link href="/join">
          <a className={styles.button}>Join Now</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        &copy; 2024 Gym Website
      </footer>
    </div>
  );
};

export default Page;