import React from 'react'
import { Hero, PopularProducts, SuperQuality, Services, Specialoffer, CustomerReviews, Subscribe } from './index'

function Home() {
  return (
    <div className='padding-l padding-r'>
    <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x">
        <Services />
      </section>
      <section className="padding">
        <Specialoffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16- w-full">
        <Subscribe />
      </section>
      </div>
  )
}

export default Home