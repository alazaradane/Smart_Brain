import React from 'react'

import { CustomerReviews, Hero, Nav, PopularProduct, Services, SpecialOffer, Subscribe, SuperQuality, Footer } from '../sections/index';

const Home = () => {
  return (
    <main className='relative bg-black text-white'>
        <Nav/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProduct/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='padding-x padding-t bg-black pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default Home