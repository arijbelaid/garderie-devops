import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Activites from '../components/Activites';
import Contact from '../components/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <Hero />
      <Services />
      <Activites />
      <Contact />
    </main>
  );
}
