import React from 'react'
import DataFormat from './DataFormat'

const BodySection = () => {

    const DATA_STORE = [
        {   
            id:'m1',
            picCountry: 'https://i.pinimg.com/564x/a2/36/ff/a236ffe7b62cf52f01a309766af42dda.jpg',
            country : "England",
            attraction : "Shopping",
            hotels : '124 places',
        },
        {   
            id:'m2',
            picCountry: 'https://i.pinimg.com/564x/64/96/d8/6496d88c5927c58fa3524de0e2e4644a.jpg',
            country : "Paris",
            attraction : "Food",
            hotels : '193 places'
        },
        {   
            id:'m3',
            picCountry: 'https://i.pinimg.com/564x/c9/bf/75/c9bf75cc7630fd4743db84ef89b29d62.jpg',
            country : "Germany",
            attraction : "Sightseeing",
            hotels : '173 places'
        },
        {   
          id:'m4',
          picCountry: 'https://i.pinimg.com/564x/1d/65/db/1d65dba44013ac893c7e3167fc939da8.jpg',
          country : "Iceland",
          attraction : "Nature",
          hotels : '159 places'
      },
]

      const data = DATA_STORE.map((data)=>
          <DataFormat 
          picCountry={data.picCountry} 
          country={data.country}
          attraction={data.attraction}
          hotels={data.hotels}
          key={data.id}
          />
  )

  return (
    <div className='container mx-auto '>
        <h1 className='text-xl font-bold mt-4'>Top destinations for Malaysia city trips</h1>
        <p className='mb-4'>Find hotels in some of the most popular cities in Malaysia</p>
        <ul className='flex flex-col md:flex-row justify-center items-center gap-0 md:gap-14'>
          {data}
        </ul>
    </div>
  )
}

export default BodySection
