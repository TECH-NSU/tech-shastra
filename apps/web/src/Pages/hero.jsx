
import "../Styles/hero.css"

export default function Hero() {
    return (
       <>

        <div className="hero-container">

      {/* Blue Planet */}
      <div className="blue"></div>

      {/* Video Layer */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/space.mp4" type="video/mp4" />
      </video>

      {/* Red Planet */}
      <div className="red"></div>

      {/* Explosions */}
      <div className="explosion-left"></div>
      <div className="explosion-right"></div>

      <div className="planets-texture"></div>
  

      {/* Content */}
      <h1>TechShastra</h1>



      

        
    <div className="heroes-container">
       <div className="hero-image1"></div>
        <div className="hero-image2"></div>
        <div className="hero-image3"></div>
        <div className="hero-image4"></div>


</div>


    <div className="surface-texture">
</div>
 
    </div>


     





      <div className="hero-about">


       < div className="techshastra-about">

       <h1>About TechShastra</h1>
       <p>
       TechShastra is a prestigious technical fest organized by <span style={{ color: 'yellow' }}>Netaji Subhas University</span> .
       <br></br> It serves as a platform for students to showcase their technical skills, creativity, ,<br></br>and innovation 
       through various competitions, workshops, and events. 
       <br></br>The fest attracts participants from across the country, fostering a spirit of <br></br>camaraderie and healthy competition among tech enthusiasts.
       <br></br> With a wide range of activities spanning multiple domains of technology, 
       <br></br>TechShastra aims to inspire and empower the next generation of engineers.
       </p>
         
         <div className="metors"></div>
       
       </div>
    </div>


    <div className="event-details"></div>
      


      
    







    
       
       </>  
       
    
    
    )
}