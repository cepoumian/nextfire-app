import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Link
        prefetch={false}
        href={{
          pathname: '[username]',
          query: { username: 'cepo82' },
        }}
      >
        <a>Cesar's Profile</a>
      </Link>
    </div>
  )
}
