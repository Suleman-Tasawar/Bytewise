import React from 'react'

const Weather = ({temperature,main ,description,image,feels_like,humidity}) => {
  return (
    <div className='mt-10 w-max bg-white p-5 rounded-md shadow-md'>
      <img className='ml-9 w-20 h-20' src={`http://openweathermap.org/img/w/${image}.png`} alt="current weather" />
      <div className='mt-2'>
        <h1 className='text-5xl text-gray-900 font-black'>{temperature}°C</h1>
        <h2 className='mt-2 text-3xl text-gray-800'>Feels Like {feels_like}°C</h2>
      </div>
      <div className="flex  justify-evenly mt-2">
        <h3 className='text-xl text-gray-900'>{main}</h3>
        <h4 className='text-xl text-gray-900'>{humidity}% humidity</h4>
      </div>
      <p className='mt-2 text-lg text-gray-900'>{description}</p>
    </div>
  )
}

export default Weather
