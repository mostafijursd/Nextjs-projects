import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  console.log(process.env.NODE_ENV);
  return (
  <main>
    {
      process.env.NODE_ENV=="development"?
      <h1> You are on development Mode </h1>
      : <h1> You are on Production Mode </h1>
    }
    <h1>next 03</h1>
  </main>
  )
}
