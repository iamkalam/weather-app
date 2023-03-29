import React, { useState,useEffect } from 'react'
import "./css/style.css"

function Tempapp() {
  const [city,setCity]=useState();
  const [search ,setSearch]=useState("islamabad");


  useEffect( ()=>{
    const fetchApi = async() =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=505cb50fc3e29ecc0c14b0978e6990ee`
    const response = await fetch(url);
    const resJson = await response.json();
    setCity(resJson.main);
    }
    fetchApi();
    },[search])

  return(
    <>
    
        <div className='box'>

          <input
            type="search"
            className='inputfield'
            onChange={(event) => { setSearch(event.target.value)
            }}
          ></input>
        {!city ? (
          <p className='data_error'>sorry! no data found</p>
        ) : (
        <div className='info'>
          <h2 className='location'>
            <i className="fa-solid fa-location-dot icon"></i> 
            {search}
          </h2>
          <h1 className='temp1'>
            {city.temp} Celsius
          </h1>
          <h2 className='tempmin_max'> max:{city.temp_max} cal  | min : {city.temp_min} cal </h2>
        </div>
        )}
        </div>

    

    </>
  )
}

export default Tempapp;