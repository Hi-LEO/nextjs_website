import styles from '@/app/styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';

const movicard = (item) => {
  const { id, type, title, synopsis } = item.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image src={item.jawSummary.backgroundImage.url} width={280} height={150} alt={title} />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 20)}</h2>
          <p>{`${synopsis.substring(0, 60)}...`}</p>
          <Link href={`/movi/${id}`}>
            <button>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default movicard