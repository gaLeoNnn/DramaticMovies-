import Navbar from "../navbar/Navbar";
import styles from "./header.module.scss";
import Image from "next/image";
import gift from "@/assets/images/gift.svg";
import bell from "@/assets/images/bell.svg";
import avatar from "@/assets/images/avatar.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.boxInput}>
        <input type="text" placeholder="SEARCH" name="text" />
        <Link href="#">
          <Image src={gift} alt="gift" />
        </Link>
        <Link href="#">
          <Image src={bell} alt="bell" />
        </Link>
        <Link href="#">
          <Image src={avatar} alt="avatar" />
        </Link>
      </div>
    </header>
  );
}
