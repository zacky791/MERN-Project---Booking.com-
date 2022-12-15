import React from 'react'
import BodySection2 from './BodySection2'
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
          place={data.country}
          attraction={data.attraction}
          hotels={data.hotels}
          key={data.id}
          />
  )

  return (
    <section>
    <div className='container mx-auto lg:px-52'>
        <h1 className='text-xl font-bold mt-4 lg:ml-20'>Top destinations for World city trips</h1>
        <p className='mb-4 lg:ml-20'>Find hotels in some of the most popular cities in World</p>
        <ul className='flex flex-col md:flex-row justify-center items-center gap-0 md:gap-14'>
          {data}
        </ul>
    </div>
    <BodySection2/>
    <div className='container p-2 mx-auto lg:px-10 lg:mt-8 lg:mb-8 lg:border-solid lg:border-4 border-yellow-500 lg:w-9/12'>
      <h1 className='font-bold text-lg'>Explore and find Hotels in Malaysia</h1>
      <p>Straddling the Asian mainland and the island of Borneo, Malaysia is a wonderful jumble of multiculturalism, wildlife-rich jungles and vibrant cities. Among Malaysia’s urban hotspots is its culturally diverse capital Kuala Lumpur (‘KL’ to locals), home to the iconic Petronas Towers, mammoth shopping malls and nightlife of the Golden Triangle. George Town, capital city of the island of Penang, is widely renowned as the food capital of Malaysia. Delicious street-food treats include grilled satay skewers, Chinese congee (rice porridge) and otak otak (steamed fish curry). This part of Southeast Asia is ideal for picturesque wildlife wanders wand watersports. Some of the best scuba diving spots and powdery soft beaches can be found around the islands of the East Coast peninsular. You can also hike through some of the oldest rainforests in the world and take up whitewater rafting within one of the country’s many national parks. Whether you’re looking to camp in Malaysia’s national parks or stay with the locals in a homestay, you’ll find accommodation to suit your needs. Main cities and beach resorts also offer a wide selection of hotels and guest houses.</p>
    </div>
    </section>
  )
}

export default BodySection
