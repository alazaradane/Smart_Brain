import React from 'react'
import {reviews} from '../constants/index'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className=' max-container'>
      <div data-aos="fade-up" data-aos-duration="1000">
        <h3 className=' font-palanquin text-4xl font-bold text-center text-black'> What Our <span className=' text-coral-blue'>Customers</span> Say?</h3>
        <p className=' info-text m-auto mt-4 max-w-lg text-center'>
          Hear a genuie stories from our satsfied customers about their execptional experinces with us.
        </p>
      </div>
      <div className=' mt-24 flex flex-1 justify-evenly items-center max-sm:flex-col max-md:gap-3 gap-14'> 
        {reviews.map((review)=>(
          <ReviewCard
            key={review.customerName}
            customerName={review.customerName}
            imgURL={review.imgURL}
            feedback= {review.feedback}
            rating={review.rating}
            />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews