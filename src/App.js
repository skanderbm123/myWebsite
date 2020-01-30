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

function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  let MainMessage1 = "Hi, My name is";
  let MainMessage2 = "Skander Ben Mekki";

  return (
    
    <ThemeProvider theme={theme}>
    <FullPage>
      <GlobalStyles />
      <Slide>
 
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
          <div style={{background:"black"}} className="main" id='project'>

            <div className="particles">
              <Particles  params={particlesParams} height={800}/>
            </div>

            <div className="project">  
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