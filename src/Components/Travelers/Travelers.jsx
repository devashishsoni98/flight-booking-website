import React from 'react'

import paris from '../../assets/paris.jpg'
import newyork from '../../assets/newyork.jpg'
import london from '../../assets/london.jpg'
import dubai from '../../assets/dubai.jpg'

import traveler1 from '../../assets/user1.jpg'
import traveler2 from '../../assets/user2.jpg'
import traveler3 from '../../assets/user3.jpg'
import traveler4 from '../../assets/user4.jpg'

const travelers = [
  {
    id:1,
    destinationImage: paris, 
    travelerImage:traveler1,
    travelerName:'Person',
    socialLink:'@person8'
  },
  {
    id:2,
    destinationImage: newyork, 
    travelerImage:traveler2,
    travelerName:'Person2',
    socialLink:'@person82'
  },
  {
    id:3,
    destinationImage: london, 
    travelerImage:traveler3,
    travelerName:'Person3',
    socialLink:'@person83'
  },
  {
    id:4,
    destinationImage: dubai, 
    travelerImage:traveler4,
    travelerName:'Person4',
    socialLink:'@person84'
  }
]

const Travelers = () => {
  return (
    <div className='travelers container section'>
        <div className="sectionContainer">
          <h2>
            Top Travelers of this month!
          </h2>

          <div className="travelersContainer grid">
           
            {
              travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
                return(
                  //  {/* Single passanger card */}
                  <div key={id} className="singleTraveler">

              <img src={destinationImage} className='destinationImage'/>

              <div className="travelerDetails">
                <div className="travelerPicture">
                  <img src={travelerImage}  className='travelerImage' />
                </div>
                <div className="travelerName">
                  <span>{travelerName}</span>
                  <p>{socialLink}</p>
                </div>
              </div>


            </div>
                )
              })
            }

            
          </div>
        </div>
    </div>
  )
}

export default Travelers