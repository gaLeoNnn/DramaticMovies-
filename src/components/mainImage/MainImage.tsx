import { ReactNode } from "react";
import Image from "next/image";
import ratingOrganization from "@/assets/images/ratingOrganization.png";
import mainImage from "@/assets/images/mainFilmImage.png";
import play from "@/assets/images/play.svg";
import plus from "@/assets/images/plus.svg";

import "../../style/style.scss";
import "./mainImage.scss";

function MainImage() {
  return (
    <>
      <div className="film">
        <div className="filmTop">
          <Image src={mainImage} alt="mainImage" priority className="backImage" />
          <div className="description">
            Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real identities
            undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover his true self.
          </div>
          <div className="genres">
            GENRES <br /> <span>Romance, Drama</span>
          </div>
          <div className="filmButtons">
            <button>
              <span>WATCH</span>
              <Image src={play} alt="play" />
            </button>
            <button>
              <span>MY LIST</span>
              <Image src={plus} alt="plus" />
            </button>
          </div>
          <div className="stats">
            <div className="statsImdb">
              <Image src={ratingOrganization} alt="" className="dataRating__organization"></Image>
              <span>7.3</span>
            </div>
            <span className="lang">U/A</span>
            <span className="quality">4K</span>
            <span className="years">2015</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainImage;
