import React from 'react'
import DataFormat from './DataFormat'

const BodySection2 = () => {

    const DATA_STORE = [
        {   
            id:'m1',
            picCountry: 'https://i.pinimg.com/564x/aa/6a/d0/aa6ad05961393c18cb5ac00be5db7cff.jpg',
            city : "Melaka",
            attraction : "Shopping",
            hotels : '124 places',
        },
        {   
            id:'m2',
            picCountry: 'https://i.pinimg.com/564x/04/05/f4/0405f482d386baf04532b4b6e660d138.jpg',
            city : "Penang",
            attraction : "Food",
            hotels : '193 places'
        },
        {   
            id:'m3',
            picCountry: 'https://i.pinimg.com/564x/82/79/fd/8279fdc9f71a0f40b80834861bcc4155.jpg',
            city : "Kuala Lumpur",
            attraction : "Sightseeing",
            hotels : '173 places'
        },
        {   
          id:'m4',
          picCountry: 'https://i.pinimg.com/564x/de/59/44/de5944be778c6d86cd02f974d0f88854.jpg',
          city : "Terengganu",
          attraction : "Nature",
          hotels : '159 places'
        },
]

      const data = DATA_STORE.map((data)=>
          <DataFormat 
          picCountry={data.picCountry} 
          place={data.city}
          attraction={data.attraction}
          hotels={data.hotels}
          key={data.id}
          />
  )

  return (
    <section>
    <div className='container mx-auto lg:px-52 '>
        <h1 className='text-xl font-bold mt-4 ml-20'>Hotels in the most popular regions in Malaysia</h1>
        <p className='mb-4 ml-20'>Find hotels in some of the most popular cities in Malaysia</p>
        <ul className='flex flex-col md:flex-row justify-center items-center gap-0 md:gap-14'>
          {data}
        </ul>
    </div>
    </section>
  )
}

export default BodySection2
