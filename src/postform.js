import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css"

function Postform(){
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [diameter, setDiameter] = useState();
    const [missing_dist, setMissing_dist] = useState();
    const [velocity, setVelocity] = useState();

    useEffect(()=>{
    async function getData(){
        const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${num}?api_key=Qgb3WPqntDJMQnX4kLbYRtzvpTFjj4rBwY2nO43z#`);
        setName(res.data.name);
        setDate(res.data.close_approach_data[118].close_approach_date_full);
        setMissing_dist(res.data.close_approach_data[118].miss_distance.kilometers);
        setVelocity(res.data.close_approach_data[118].relative_velocity.kilometers_per_hour);
        setDiameter(res.data.estimated_diameter.kilometers.estimated_diameter_max)
    }
    getData();
});
    return(
        <>  
        <div className="Major">
      
        <h1 className='title'>ASTEROMANIA</h1>
        <p className='description'> 
        Asteroids have remained a topic of interest for people who like to explore space to know the unknown.Our website aims to help
        these curious minds in knowing various aspects regarding a particular asteroid like date, relative velocity, diameter etc. when 
        the asteroid is closest to Earth. So, what are you waiting for? Go ahead and type in the SPK-ID of the asteroid you are 
        looking for!
        </p>
            <div className='form'>
            <form onChange={(event)=>{setNum(event.target.value)}}>

                <input className="input" type="text" placeholder='Enter valid SPK-ID of Asteroid(ex. 3542519)'></input>
                
            </form>
            <div className='sky'>
            <div className='star'></div>
        <div className='star'></div>
          <div className='star'></div>
            <div className='star'></div>
              </div>
              
              </div>
              <div className='Content'>
                   <h2 className="name">Designation :<span className='span1'>{name}</span></h2>
                   <h2 className="date">Close Approach Date :  <span className="span2">{date}</span></h2>
                   <h2 className="dist">Missing Distance in km :<span className='span3'>{missing_dist}</span></h2>
                   <h2 className="diameter">Asteroid's Estimated Diameter in km :  <span className='span4'>{diameter}</span></h2>
                   <h2 className="velocity">Asteroid's Relative Velocity in km/hr :  <span className='span5'>{velocity}</span></h2>
           </div>
           
        </div>
        </>
    )
    };

export default Postform;