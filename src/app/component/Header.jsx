import Link from "next/link"
import Image from "next/image"
import styles from "@/app/styles/navbar.module.css"
import { Nav } from "./Nav"
export const Header = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href="/">
            {/* <Image src='' alt="" width={150} height={40} />
             */}
            <h2 >C & K</h2>
          </Link>
        </div>
        <Nav />

      </header>
    </>
  )
}
