import styles from "./card.module.scss";
import Image, { StaticImageData } from "next/image";
import imdbImg from "@/assets/images/imdb.svg";
import eye from "@/assets/images/eye.svg";
import heart from "@/assets/images/heart.svg";

interface IProps {
  id: number;
  poster_path: string;
  title: string;
  release_date: number;
  vote_average: number;
}

const Card = ({ poster_path, title, release_date, vote_average }: IProps) => {
  
  
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Image
          className={styles.film}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="img"
          width={168}
          height={237}
        />
        <div className={styles.title}>{title}</div>
        <p className={styles.year}>{release_date}</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.ratio}>
          <Image src={imdbImg} alt="imdb" />
          <span>{vote_average}</span>
        </div>
        <div className={styles.icons}>
          <Image src={eye} alt="eye" />
          <Image src={heart} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default Card;
