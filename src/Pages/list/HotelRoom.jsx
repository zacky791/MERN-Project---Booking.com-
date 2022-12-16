import React from 'react'
import Button from '../../Component/UI/Button'

const HotelRoom = () => {
  return (
  <section>
    <div className='flex md:flex-row flex-col text-center md:text-start container mx-auto lg:px-48 items-center justify-between' >
      <div className='flex flex-col mt-8 space-y-2 '>
        <span className='font-bold text-xl'>The LandMark London </span>
        <span className='text-sm'>24 Hall Hilton London</span>
        <span>⭐⭐⭐⭐⭐ 5 Star Hotel And Excellent location</span>
        <span>Book a stay over RM 299 at this property and get a free airport taxi</span>
        </div>
        <Button className='w-40 mt-4 h-10'>Reserve The Room</Button>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-5 md:space-y-0 mt-6'>
        <img className=' w-80 h-72' src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/137498170.jpg?k=6a7c62b48234f9a8b7d3cab13da3fff83a2891491c050e4add1c32d4542a8ee6&o=&hp=1' alt='pic'/>
        <img className=' w-80 h-72' src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/137475054.jpg?k=039c8197ff2f69dbcb7e3540481571494381cc6619e8a05760d09f8a3abf6b7d&o=&hp=1' alt='pic'/>
        <img className=' w-80 h-72' src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/199650376.jpg?k=0ef9b9ab678a21b52dbeb742a65f393405c4af0961f09707c2dc878241eff34c&o=&hp=1' alt='pic'/>
      </div>

      <div className='flex flex-col mb-6 md:flex-row justify-center items-center md:space-x-8 space-y-5 md:space-y-0 mt-6'>
        <img className=' w-80 h-72' src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/199650559.jpg?k=c5a86cf71da99d45d156cbf7395a63e503a252fc21c9c06418951f1ae26b82a4&o=&hp=1' alt='pic'/>
        <img className=' w-80 h-72' src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/199649500.jpg?k=5a3a9ba3b0af10c050bcc5adeeae7672e3458139a487dea739c00d5ac3c9195b&o=&hp=1' alt='pic'/>
        <img className=' w-80 h-72' src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/271342054.jpg?k=8cb9023bba0c04ab9b183a1c43b3d344c51045c0448d40979f6f39260119b4a4&o=&hp=1' alt='pic'/>
      </div>

      <section className='flex justify-between mb-10 mx-auto items-center lg:px-48 md:flex-row flex-col '>
      <div className='flex flex-col mt-4 w-3/5'>
        <span className='font-bold mb-4 text-lg  '>Stay in the heart of city</span>
        <span className=''>Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II International Kraków–Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.</span>
      </div>

      <div className='flex flex-col mt-6 w-1/4 border-2 p-6 border-yellow-500'>
        <span className='font-bold'>Perfect for a 9-night stay!</span>
        <span className='mt-3'>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
        <span className='mt-2'>RM 689 (9 nights)</span>
        <Button className='mt-3 w-40 ml-7'>Book Now !</Button>
      </div>
      </section>  
    </section>
  )
}

export default HotelRoom
