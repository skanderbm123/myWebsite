import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import {particlesParams} from './components/particlesParams'
import Particles from 'react-particles-js';
import { Wave} from 'react-animated-text';
import { FullPage, Slide } from 'react-full-page';
import Announcement from 'react-announcement'
import Logo from './images/download.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  let MainMessage1 = "Hi, My name is";
  let MainMessage2 = "Skander Ben Mekki";

  var settings = {
    arrows:false,
    autoplay : true,
    infinite: true,
    autoplaySpeed:999,
    swipeToSlide:true,
    pauseOnHover:true,
    slidesToShow: 3,
    slidesToScroll:1
  };

  return (
    <ThemeProvider theme={theme}>
    <FullPage duration={100}>
      <GlobalStyles />
      <Slide>
      <Announcement
          title="Download my Resume! "
          subtitle="It's a nice way to know me😊 "
          link="https://srv-file10.gofile.io/download/fopXGm/Skander%20Ben%20Mekki%20CV.pdf"
          imageSource={Logo}
          daysToLive={0}
          secondsBeforeBannerShows={3}
          closeIconSize={30}
      />
          <div className="main" id='about'>  
     
          <div className="particles">
              <Particles  params={particlesParams} height={800}/>
              </div>
           
              <div className="front">  
                <div className="smallFont"> 
                  <Wave text={MainMessage1} effect="jump" effectDuration={1.0} delay={2.0} speed={12.0}/>
                 </div>  

                <div className="biggerFont">  
                 <Wave text={MainMessage2} effect="verticalFadeIn" effectDuration={1.0} delay={1.0} speed={10.0} iterations={1}/>
                </div> 
              </div>

          </div>
      </Slide>
      <Slide> 
      
      <div style={{background:"linear-gradient(188deg, rgba(34,193,195,1) 0%, rgba(128,190,131,1) 61%, rgba(253,187,45,1) 100%)"}} className="main" id='project'>
            <div className="particles">
              <Particles  params={particlesParams} height={800}/>
            </div>
        
          <div className="project"> 
          <h1 style={{textAlign: "center"}}>Digital Adoption Platform</h1>
            <div className="row">
              <div className="column">
              <img src ="https://i.postimg.cc/3xf6yrDp/capstone1.png" className="photo" alt="project"/>
                </div>
                 <div className="column" style={{fontSize:"1.5em",width:"45%",fontWeight:"600"}} >
                  <p>2019 to Present | <br/>Interface that helps users navigate through unfamiliar software using scenarios and allows analysts to create, update and develop How-To Scenarios for their React Application </p>
                  <ul>
                        <li>Conceived the backend infrastructure using a responsive REST API </li>
                        <li>CI/CD pipeline that runs nUnits Tests and deploys the application in the testing environment </li>
                        <li>Familiarized with C#, .NET Core and Microsoft SQL Server</li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>

      </Slide>
      <Slide> 
          <div style={{background:"linear-gradient(357deg, rgba(195,227,227,1) 0%, rgba(148,190,128,1) 61%, rgba(253,187,45,1) 100%)"}} className="main"  id="work">

            <div className="particles">
              <Particles  params={particlesParams} height={800}/>
            </div>
        
          <div className="project"> 
          <h1 style={{textAlign: "center"}}>FullStack Web Developer Intern</h1>
            <div className="row">
              <div className="column">
              <img src ="https://services.pwc.ca/files/images/misc/pwc_ew.jpg" className="photo" alt="project"/>
                </div>
                 <div className="column" style={{fontSize:"1.2em",width:"45%",fontWeight:"600"}} >
                  <p>2018 | Pratt & Whitney Canada – Longueil, QC <br/>Responsible for working on the main interface used by the R&D department, designing and developing new features while fixing bugs. Working as a one-man team for the whole web application </p>
                  <ul>
                        <li>Designed and implemented new features such as a bug report system for Users. </li>
                        <li>Reduced time for loading charts by improving SQL Queries</li>
                        <li>Identifying and correcting software bugs </li>
                        <li>Trained and hired new interns </li>
                        <li>Familiarized with CSS, PHP, JQuery, MSSQL </li>
                  </ul>
                </div>
              </div>
            <h1 style={{textAlign: "center"}}>Quality Assurance Intern</h1>
            <div className="row">
              <div className="column">
              <img src ="https://uplandsoftware.com/cimpl/wp-content/uploads/sites/39/2019/10/og-logo-cimpl.png" className="photo" alt="project"/>
                </div>
                 <div className="column" style={{fontSize:"1.2em",width:"45%",fontWeight:"600"}} >
                  <p>2017 | Cimpl – Montreal, QC <br/>Collaborated in a team-focused environment in a startup company and key contributor as a QA tester </p>
                  <ul>
                        <li>Gathered data and produce reports for Scrum meeting on a regular basis</li>
                        <li>Addressed quality status and product defect concerns </li>
                        <li>Familiarized with MSSQL and Agile methodology </li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>
      </Slide>

      <Slide> 
          <div style={{background:"linear-gradient(176deg, rgba(194,239,240,1) 0%, rgba(246,255,242,1) 61%, rgba(45,220,253,0.7119048302914917) 100%)"}} className="main" id='about'>

            <div className="particles">
              <Particles  params={particlesParams} height={800}/>
            </div>
        
          <div className="project"> 
          <h1 style={{textAlign: "center"}}>Who am I? 🤔 </h1>

        <div className="me" style={{backgroundImage:"url(https://i.imgur.com/0U7Ob1m.jpg)",
        backgroundPosition: '100% 45%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>

        <div className="onTop">
        <p>
         <b> I'm currently a student of Concordia University(Grad.2020) <br/>
          and a Software Developer. You can often find me at the pool(previously a lifeguard) or trying to learn some new things about programming<br/>
          I'm always passionate about learning new technologies, especially Full-Stack Web Dev. ! <br/>
          I also enjoy Mobile Development. Below are some of the technologies I'm familiar with</b>
        </p>

        </div>
        

        </div>

          <Slider style={{textAlign: "center",height:"30%"}} {...settings}>
          <div>
          <img className="logo" src ="https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo-java-830x460.jpg" alt="java"/>
        </div>
        <div>
          <img className="logo" src ="data:image/png;base64,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" alt="react"/>
        </div>
        <div>
          <img className="logo" src ="https://bitmovin.com/wp-content/uploads/2016/07/c-sharp-logo2.gif" alt="c#"/>
        </div>
        <div>
          <img  className="logo" src ="https://banner2.cleanpng.com/20180704/zoa/kisspng-jquery-ui-javascript-web-browser-pasargad-5b3d093837a4d4.5712269815307267122279.jpg" alt="Jquery"/>
        </div>
        <div>
          <img className="logo" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png" alt="php"/>
        </div>
  
         </Slider>
            </div>
          </div>
      </Slide>


      </FullPage>


      <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
     </div>


    </ThemeProvider>
   
  );
}
export default App;