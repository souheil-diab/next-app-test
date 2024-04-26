import Link from "next/link";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.bg}>

        <h1 className={styles.h}>HELLO NEXT</h1>
        
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/posts'>Posts</Link>
    </div>
  )
}
