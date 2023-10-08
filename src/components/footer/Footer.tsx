import Link from "next/link";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      {" "}
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__language">
            <svg
              className="footer__language-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M1.5 9H16.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M9 1.5C10.876 3.55376 11.9421 6.21903 12 9C11.9421 11.781 10.876 14.4462 9 16.5C7.12404 14.4462 6.05794 11.781 6 9C6.05794 6.21903 7.12404 3.55376 9 1.5V1.5Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <select name="language" id="language-select">
              <option value="English">English</option>
              <option value="Russin">Russin</option>
            </select>
            <svg
              className="footer__language-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
            >
              <path d="M10 0.999994L5.5 6L1 1.00001" stroke="#E7E7E7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="footer__menu menu-footer">
            <div className="menu-footer__row">
              <div className="menu-footer__column">
                <div className="menu-footer__title">Navigation</div>
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <Link href="" className="menu-footer__link">
                      Home
                    </Link>
                  </li>
                  <li className="menu-footer__item">
                    <Link href="" className="menu-footer__link">
                      FAQ
                    </Link>
                  </li>
                  <li className="menu-footer__item">
                    <Link href="" className="menu-footer__link">
                      Investor Relations
                    </Link>
                  </li>

                  <li className="menu-footer__item">
                    <Link href="" className="menu-footer__link">
                      Jobs
                    </Link>
                  </li>
                  <li className="menu-footer__item">
                    <Link href="" className="menu-footer__link">
                      About Us
                    </Link>
                  </li>
                  <li className="menu-footer__item">
                    <Link href="" className="menu-footer__link">
                      Help Centre
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-footer__column">
                <div className="menu-footer__title">LEGAL</div>
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <Link href="" className="menu-footer__link">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="menu-footer__item">
                    <Link href="" className="menu-footer__link">
                      Terms of Service
                    </Link>
                  </li>
                  <li className="menu-footer__item">
                    <Link href="" className="menu-footer__link">
                      Cookie Preferences
                    </Link>
                  </li>

                  <li className="menu-footer__item">
                    <Link href="" className="menu-footer__link">
                      Corporate Information
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-footer__column">
                <div className="menu-footer__title">TALK TO US</div>
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <Link href="mailto:support@ercom.com" className="menu-footer__link">
                      support@ercom.com
                    </Link>
                  </li>
                  <li className="menu-footer__item">
                    <Link href="tel:+6623991145" className="menu-footer__link">
                      +66 2399 1145
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__media">
            <div className="footer__follow">Follow us</div>
            <div className="footer__social social-footer">
              <ul className="social-footer__list">
                <li className="social-footer__item">
                  <Link href="" className="social-footer__link">
                    <svg
                      fill="#FFFFFF"
                      width="22px"
                      height="22px"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li className="social-footer__item">
                  <Link href="" className="social-footer__link">
                    <svg
                      fill="#FFFFFF"
                      width="16px"
                      height="16px"
                      viewBox="0 0 1920 1920"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z"
                          fillRule="evenodd"
                        ></path>{" "}
                      </g>
                    </svg>
                  </Link>
                </li>
                <li className="social-footer__item">
                  <Link href="" className="social-footer__link">
                    <svg
                      viewBox="0 -2 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="#ffffff"
                      stroke="#ffffff"
                      width="16px"
                      height="16px"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          {" "}
                          <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#ffffff">
                            {" "}
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                              {" "}
                              <path
                                d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                                id="twitter-[#ffffff]"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2022 Dramatic. All Rights Reserved. </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
