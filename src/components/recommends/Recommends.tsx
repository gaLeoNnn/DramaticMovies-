// import styles from "./recommends.module.scss";
// import Link from "next/link";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Card from "../card/Card";
// import vector from "@/assets/images/vector.svg";
// import film1 from "@/assets/images/film1.png";
// import film2 from "@/assets/images/film2.png";
// import film3 from "@/assets/images/film3.png";
// import film4 from "@/assets/images/film4.png";
// import film5 from "@/assets/images/film5.png";
// import film6 from "@/assets/images/film6.png";
// import film7 from "@/assets/images/film7.png";

// const Recommends = () => {
//   const dataMovies = [
//     { id: 1, img: film1, title: "Kumbalangi Nights", year: 2019, imdb: 8.6 },
//     { id: 2, img: film2, title: "The Lunchbox", year: 2013, imdb: 7.7 },
//     { id: 3, img: film3, title: "Haider", year: 2014, imdb: 8.4 },
//     { id: 4, img: film4, title: "Aamis", year: 2019, imdb: 8.0 },
//     { id: 5, img: film5, title: "Court", year: 2014, imdb: 7.6 },
//     { id: 6, img: film6, title: "Masaan", year: 2015, imdb: 8.1 },
//     { id: 7, img: film7, title: "Kai Po Che", year: 2013, imdb: 6.6 },
//   ];
//   const settings = {
//     className: "center",
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 6,
//     arrows: false,
//     swipeToSlide: true,
//     afterChange: function (index: number) {
//       console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
//     },
//   };

//   return (
//     <div className={styles.recommends}>
//       <h2 className={styles.title}>RECOMMENDED FOR YOU</h2>
//       <div className={styles.tabs}>
//         <Link className={styles.link} href="#">
//           Hindi
//         </Link>
//         <Link className={styles.link} href="#">
//           Bengali
//         </Link>
//         <Link className={styles.link} href="#">
//           Marathi
//         </Link>
//         <Link className={styles.link} href="#">
//           Assamese
//         </Link>
//         <Link className={styles.link} href="#">
//           Tamil
//         </Link>
//         <Link className={styles.link} href="#">
//           Malayalam
//         </Link>
//       </div>
//       <Slider {...settings}>
//         {dataMovies.map(item => {
//           return <Card key={item.id} {...item} />;
//         })}
//       </Slider>
//       <Slider {...settings}>
//         {dataMovies.map(item => {
//           return <Card key={item.id} {...item} />;
//         })}
//       </Slider>

//       <button>
//         <span>Show More</span>
//         <Image src={vector} alt="play" />
//       </button>
//     </div>
//   );
// };

// export default Recommends;
