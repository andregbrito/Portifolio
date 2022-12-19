import "./styles.css";
import avatarImg from "../../assets/img/avatar.png"
import htmlImg  from "../../assets/img/html.png"
import cssImg from "../../assets/img/css.png"
import reactImg  from "../../assets/img/react.png"



export function ContainerMenu(){
    return(
        <div className="Sideback">

          <dir className="Toggle">
            <i className="bx bx-chevron-right"></i>
          </dir>

          <div className="TopBox">
              <img src={avatarImg} alt="Avatar" />
              <h1>André Brito</h1>
          </div>

          <div className="MidBox">
            <ul>
              
              <li className="nav-item">
                <a href="https://www.linkedin.com/in/andrégbrito/">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
              <li className="nav-item">
              <a href="https://github.com/andregbrito">
                <i className="bx bxl-github"></i>
              </a>  
              </li>
              <li className="nav-item">
              <a href="https://api.whatsapp.com/send/?phone=5511982196279&text&type=phone_number&app_absent=0">
                <i className="bx bxl-whatsapp"></i>
              </a>
              </li>
            </ul>
          </div>

          <div className="BottomBox">
              <section className="stacks">
              <img src= {htmlImg} alt="HTML5 Logo" />
              <img src= {cssImg} alt="CSS6 Logo" />
              <img src= {reactImg} alt="React Logo" />

              </section>
          </div>
        </div>

    );
};