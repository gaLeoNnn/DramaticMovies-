"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const navigation = [
    { id: 1, title: "HOME", path: "/" },
    { id: 2, title: "SHOW", path: "/show" },
    { id: 3, title: "MOVIES", path: "/movies" },
    { id: 4, title: "NEW", path: "/new" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>

      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link className={`${styles.link} ${pathname === path ? styles.active : ""}`} key={id} href={path}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
