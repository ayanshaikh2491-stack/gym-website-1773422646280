import Head from 'next/head';
import { Navbar } from '../components/Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Gym Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <footer>
        &copy; 2024 Gym Website
      </footer>
    </div>
  );
};

export default Layout;