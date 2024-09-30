import Info from "./Info";
import "./About.css";
import AboutImg from "../../assets/about-img.webp";
import workEmoji from "../../assets/work_emoji.png";
import CV from "../../assets/Bamidele_s_Resume.pdf";
import Balls from "../skills/Balls";

const About = () => {
  return (
    <section className="about" id="about">
      {/* Moved from skill section */}
      <div className="tech__stack__ctn">

      <h3 className="skills__head">Tech Stack</h3>
      </div>
      <Balls />
      <div className="about__container  grid">
        
        <div className="about__img__wrapper">
          <img src={AboutImg} alt="Bamidele Image" className="about__img" />
          <div className="about__work__emoji__ctn">
            <img
              src={workEmoji}
              alt="PC emoji"
              className="about__work__emoji"
            />
          </div>
          <div className="about__roatate__animation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="1000"
              height="1000"
              viewBox="0 0 1000 1000"
              space="preserve"
              className="about__svg"
            >
              <desc>Created with Fabric.js 2.3.2</desc>
              <defs></defs>
              <g transform="translate(500 500) scale(5.65 5.65)">
                {" "}
                <g transform="translate(-28.23 66.32) rotate(-160.54)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.03" y="5.65">
                      F
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(-43.23 57.39) rotate(-146.17)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-4.98" y="5.65">
                      U
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(-55.37 45.25) rotate(-131.88)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-4.73" y="5.65">
                      L
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(-64.61 29.78) rotate(-117.94)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.76" y="5.65">
                      L
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(-69.48 12.4) rotate(-102.53)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.01" y="5.65">
                      S
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(-69.85 -5.12) rotate(-88.18)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.06" y="5.65">
                      T
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(-65.78 -22.49) rotate(-73.78)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.35" y="5.65">
                      A
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(-57.08 -38.79) rotate(-58.96)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.76" y="5.65">
                      C
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(-44.84 -51.77) rotate(-43.54)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-4.81" y="5.65">
                      K
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(-32.16 -60.01) rotate(-29.5)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-2.81" y="5.65">
                      {" "}
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(-15.58 -66.32) rotate(-18.31)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-6.93" y="5.65">
                      W
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(3.63 -67.77) rotate(-1.22)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.35" y="5.65">
                      E
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(21.44 -64.45) rotate(13.59)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.4" y="5.65">
                      B
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(35.56 -57.88) rotate(28.49)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-2.81" y="5.65">
                      {" "}
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(48.06 -48.52) rotate(39.68)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-4.81" y="5.65">
                      D
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(59.24 -34.85) rotate(53.72)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.35" y="5.65">
                      E
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(66.5 -18.98) rotate(68.54)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-4.74" y="5.65">
                      V
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(69.71 -1.66) rotate(82.5)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.35" y="5.65">
                      E
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(68.48 15.39) rotate(97.32)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-4.37" y="5.65">
                      L
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(63.41 31.31) rotate(110.74)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-4.73" y="5.65">
                      O
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(54.52 45.76) rotate(124.69)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-4.71" y="5.65">
                      P
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(41.96 58.06) rotate(138.59)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-5.35" y="5.65">
                      E
                    </tspan>
                  </text>{" "}
                </g>{" "}
                <g transform="translate(26.58 66.83) rotate(153.41)">
                  {" "}
                  <text
                    space="preserve"
                    fontFamily="BubbleLetterRegular"
                    fontSize="18"
                    fontStyle="normal"
                    fontWeight="normal"
                  >
                    <tspan x="-4.98" y="5.65">
                      R
                    </tspan>
                  </text>{" "}
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="about__data">
          <h3 className="about__me">ABOUT ME</h3>
        <h3 className="about__me__sub">Developer, Teacher, and Lifelong Learner</h3>
          {/* <Info /> */}

          <p className="about__description">
            My expertise lies in the realm of full-stack development, where I
            specialize in Node.js for backend development and React/Next.js for
            building dynamic, responsive front-end applications. <br/><br/>I have a strong
            command of both server-side technologies and frameworks, as well as
            modern client-side development, ensuring seamless integration
            between the two to deliver high-performance web applications.
          </p>
          <a
            href={CV}
            download="Bamidele_s_Resume.pdf"
            className="button button--flex"
          >
            View my CV
            <svg
              class="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                fill="var(--container-color)"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
