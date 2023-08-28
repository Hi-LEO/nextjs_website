import Link from "next/link"
import Movicard from "../component/movicard";
import styles from '@/app/styles/common.module.css'
const page = async () => {

  const url = process.env.Rapid_key;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eca0a8abb2msh49eed9b50ac4efep1a3128jsn90175df2f820',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();

  const main_data = data.titles;


  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>

            {
              main_data.map((item) => {
                return <Movicard key={item.id} {...item} />
              })
            }
          </div>
        </div>
      </section>
    </>

  )
}

export default page