import React from 'react'
import HotelFormat from './HotelFormat'

const HotelDisplay = () => {

    const DATA_DISPLAY = [
        {
            hotelName:"Seri Indah",
            distanceFromCenter: '200',
            free: "Free Airport Taxi",
            advantage: "Room With Nice Nature View",
            description: "Entire studio . 1 bathroom . 1 full bed",
            extra: "Free Cancellation",
            secureText: 'You can cancel later, so lock in this great price today!',
            price:'RM 299',
            picture: 'https://i.pinimg.com/564x/38/8e/86/388e8684505e33aa46e241caaeba2459.jpg',
        },
        {
            hotelName:"Ancasa",
            distanceFromCenter: '200M',
            free: "Free Airport Taxi",
            advantage: "Room With Nice Nature View",
            description: "Entire studio . 1 bathroom . 1 full bed",
            extra: "Free Cancellation",
            secureText: 'You can cancel later, so lock in this great price today!',
            price: "RM 249",
            picture: 'https://i.pinimg.com/564x/49/ec/0f/49ec0fd70f2f630f81f5a30c5829cbaf.jpg',
        },
        {
            hotelName:"Royal Chain",
            distanceFromCenter: '200M',
            free: "Free Airport Taxi",
            advantage: "Room With Nice Nature View",
            description: "Entire studio . 1 bathroom . 1 full bed",
            extra: "Free Cancellation",
            secureText: 'You can cancel later, so lock in this great price today!',
            price: "RM 153",
            picture: 'https://i.pinimg.com/564x/5a/96/07/5a960747b6fa3fb1ebc970c7b56e4c51.jpg'
        },
        {
            hotelName:"Mega View",
            distanceFromCenter: '200M',
            free: "Free Airport Taxi",
            advantage: "Room With Nice Nature View",
            description: "Entire studio . 1 bathroom . 1 full bed",
            extra: "Free Cancellation",
            secureText: 'You can cancel later, so lock in this great price today!',
            price: "RM 153",
            picture: 'https://i.pinimg.com/564x/bf/a7/b2/bfa7b2591ea91d212574b9c3c86d80d2.jpg'
        },
        {
            hotelName:"Sun Bath",
            distanceFromCenter: '200M',
            free: "Free Airport Taxi",
            advantage: "Room With Nice Nature View",
            description: "Entire studio . 1 bathroom . 1 full bed",
            extra: "Free Cancellation",
            secureText: 'You can cancel later, so lock in this great price today!',
            price: "RM 153",
            picture: 'https://i.pinimg.com/564x/89/86/96/898696e5bee31a1d053aa3061765096f.jpg'
        },
        {
            hotelName:"Paradise Ocean",
            distanceFromCenter: '200M',
            free: "Free Airport Taxi",
            advantage: "Room With Nice Nature View",
            description: "Entire studio . 1 bathroom . 1 full bed",
            extra: "Free Cancellation",
            secureText: 'You can cancel later, so lock in this great price today!',
            price: "RM 153",
            picture: 'https://i.pinimg.com/564x/ef/2a/e1/ef2ae1b64833906afc92de0ee89ffa6d.jpg'
        },
    ]

    const view = DATA_DISPLAY.map((info)=>
    <HotelFormat 
        hotelName={info.hotelName}
        distanceFromCenter={info.distanceFromCenter}
        free={info.free}
        advantage={info.advantage}
        description={info.description}
        extra={info.extra}
        secureText={info.secureText}
        picture={info.picture}
        price={info.price}
    />)

  return (
    <ul >
      {view}
    </ul>
  )
}

export default HotelDisplay
