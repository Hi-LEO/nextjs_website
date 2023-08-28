import Image from 'next/image'
import styles from './page.module.css'
import Herosection from './component/Herosection'
export default function Home() {
  return (
    <>
      <Herosection title={'This is our website'} imageUrl={'/home.svg'} />
    </>
  )
}
