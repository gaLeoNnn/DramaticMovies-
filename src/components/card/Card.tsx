import styles from "./card.module.scss";
import Image, { StaticImageData } from "next/image";
import imdbImg from "@/assets/images/imdb.svg";
import eye from "@/assets/images/eye.svg";
import heart from "@/assets/images/heart.svg";

interface IProps {
  id: number;
  img: StaticImageData;
  title: string;
  year: number;
  imdb: number;
}

const Card = ({ id, img, title, year, imdb }: IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Image className={styles.film} src={img} alt="img" />
        <div className={styles.title}>{title}</div>
        <p className={styles.year}>{year}</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.ratio}>
          <Image src={imdbImg} alt="imdb" />
          <span>{imdb}</span>
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
