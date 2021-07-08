import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';

export default function Home() {
  return (
    <main>
      <Loader />
      <h1>Home Page</h1>
      <button onClick={() => toast.success('hello toast!')}>Toast Me</button>
    </main>
  );
}
