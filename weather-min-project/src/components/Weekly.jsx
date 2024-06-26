import React from 'react'

const Weekly = ({WeekName,image,temperature,description}) => {
  return (
    <div>
       <img className='ml-9 w-20 h-20' src={`http://openweathermap.org/img/w/${image}.png`} alt="current weather" />
        <h1 className='mt2 text-5xl text-gray-900 font-black'>{WeekName}</h1>
        <h1 className='mt-2text-4xl text-gray-900 font-bold'>{temperature}°C</h1>
        <p className='mt-2 text-lg text-gray-900'>{description}</p>
    </div>
  )
}

export default Weekly
