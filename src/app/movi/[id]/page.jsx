import React from 'react'
import Image from 'next/image';
import styles from '@/app/styles/common.module.css'
const page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eca0a8abb2msh49eed9b50ac4efep1a3128jsn90175df2f820',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();

  const main_data = data[0].details;

  return (
    <>

      <div className={styles.container}>
        <h2 className={styles.movie_title}> Netflex <span > {main_data.type}</span></h2>
        <div className={styles.card.secton}>
          <Image src={main_data.backgroundImage.url} width={500} height={300} alt='' />

        </div>
        <h2>{main_data.title}</h2>
        <p>{main_data.synopsis}</p>
      </div>

    </>)
}

export default page