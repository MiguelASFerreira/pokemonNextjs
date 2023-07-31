import styles from './page.module.css'
import Home from '@/components/Home/Home'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  )
}
