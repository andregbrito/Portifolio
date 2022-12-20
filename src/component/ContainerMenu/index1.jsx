import "./styles.css";
import avatarImg from "../../assets/img/avatar.png"
import jsImg  from "../../assets/img/js.png"

import reactImg  from "../../assets/img/react.png"


// function toggle (){
//   const sideback = document.querySelector('.Sideback');
//   const navItems = document.querySelectorAll('.Sideback');
//   const toggle = document.querySelector('.Sideback .Toggle');

//   toggle.addEventListener('click', () =>{

//       if(sideback.className ==='Sideback')
//       sideback.classList.add('open');

//       else
//         sideback.classList.remove('open');
    
//       });
//   navItems.forEach(nav-item =>{

//       nav-items.addEventListenner('click', () => {


//       })
//   })
// }



export function ContainerMenu(){
    return(
        <section className="layout">

            {/* <div className="toggle">
              <i className="bx bx-chevron-right"></i>
            </div> */}

           <div className="nav-logo">
              <img src={avatarImg} alt="Avatar" />
              <h1>André Brito</h1>
           </div>

           

            <div className="nav-link">

             <ul>
                
                <li className="nav-item active">
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

                <li className="nav-stack">
                  <img src= {reactImg} alt="React Logo" />
                  <img src= {jsImg} alt="JavaScript Logo" />
      
                </li>
              

              </ul>
              
                

            </div>

        </section>

    );
};