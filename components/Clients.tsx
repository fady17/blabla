'use client';
import React from 'react';
import Image from 'next/image'; // Import next/image

import { companies, testimonials } from '@/data';
import { InfiniteMovingCards } from './ui/InfiniteCards';

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <div className="md:w-10 w-5">
                  {' '}
                  {/* Placeholder for the first image */}
                  <Image
                    src={company.img}
                    alt={company.name}
                    width={10}
                    height={10}
                  />
                </div>
                <div className="md:w-24 w-20">
                  {' '}
                  {/* Placeholder for the second image */}
                  <Image
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    height={company.id === 4 || company.id === 5 ? 100 : 150}
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
