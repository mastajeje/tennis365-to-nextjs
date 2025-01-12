import styles from "./Footer.module.scss"

export default function Footer() {
  return <footer className={styles.footer}>&copy;{new Date().getFullYear()}Tennis365</footer>;
}
