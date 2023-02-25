import 'bulma/css/bulma.css'
import {useState } from "react"; 
import ProfileCard from "./profilecard";
import  white from "./white shirt.jpg";
import pink from "./pink shirt.webp";

function App()
{
    return(
     <div>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'>trendy shirt</p>
            </div>
        </section>
        <div className='container'>
            <section className='section'>

            
            <div className='columns'>
                <div className='column is-4'><ProfileCard title="Roadstar" img={white} description="lets make it" price="499"/></div>
                <div className='column is-4'> <ProfileCard title="Mayra" img={pink} description="chease  cke love"price="500" /></div>
                <div className='column is-4'> <ProfileCard title="Mayra" img={pink} description="chease  cke love"price="500" /></div>
                
                
            </div>
            </section>
            <section className='section'>

            
            <div className='columns'>
                <div className='column is-4'><ProfileCard title="Roadstar" img={white} description="lets make it" price="499"/></div>
                <div className='column is-4'> <ProfileCard title="Mayra" img={pink} description="chease  cke love"price="500" /></div>
                <div className='column is-4'> <ProfileCard title="Mayra" img={pink} description="chease  cke love"price="500" /></div>
                
                
            </div>
            </section>
            <section className='section'>

            
            <div className='columns'>
                <div className='column is-4'><ProfileCard title="Roadstar" img={white} description="lets make it" price="499"/></div>
                <div className='column is-4'> <ProfileCard title="Mayra" img={pink} description="chease  cke love"price="500" /></div>
                <div className='column is-4'> <ProfileCard title="Mayra" img={pink} description="chease  cke love"price="500" /></div>
                
                
            </div>
            </section>
        </div>
       
       
     </div>
    ); 
} 

export default App; 