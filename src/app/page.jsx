import styles from "../app/page.module.scss";
import Landing from "./components/landing-page";

export default function Home() {
  return (
    <main className={styles.main}>
     <Landing />
    </main>
  );
}
