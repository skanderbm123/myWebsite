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

function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  let MainMessage1 = "Hi, My name is";
  let MainMessage2 = "Skander Ben Mekki";


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
      
      <div style={{background:"radial-gradient(circle, rgba(63,94,251,0.8183474073223039) 0%, rgba(252,70,107,0.36456589471726186) 100%)"}} className="main" id='project'>
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
          <div style={{background:"radial-gradient(circle, rgba(63,94,251,0.8183474073223039) 0%, rgba(252,70,107,0.36456589471726186) 100%)"}} className="main">

            <div className="particles">
              <Particles  params={particlesParams} height={800}/>
            </div>
        
          <div className="project"> 
          <h1 style={{textAlign: "center"}}>FullStack Web Developer Intern</h1>
            <div className="row">
              <div className="column">
              <img src ="https://services.pwc.ca/files/images/misc/pwc_ew.jpg" className="photo" alt="project"/>
                </div>
                 <div className="column" style={{fontSize:"1.5em",width:"45%",fontWeight:"600"}} >
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
            </div>
          </div>
      </Slide>

      <Slide> 
          <div style={{background:"black"}} className="main" id='contact'>

            <div className="particles">
              <Particles  params={particlesParams} height={800}/>
            </div>
        
          <div className="project"> 
          <h1 style={{textAlign: "center"}}>FullStack Web Developer Intern</h1>
            <div className="row">
              <div className="column">
              <img src ="https://services.pwc.ca/files/images/misc/pwc_ew.jpg" className="photo" alt="project"/>
                </div>
                 <div className="column" style={{fontSize:"1.5em",width:"45%",fontWeight:"600"}} >
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