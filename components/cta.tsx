import React from 'react';

const CTA = () => {
  return (
    <section
      className="cta bg-no-repeat bg-cover bg-center h-full w-full"
      aria-label="cta"
      style={{ backgroundImage: `url('/cta-bg.jpg')` }}
    >
      <div className=" container mx-auto px-4 flex flex-row items-center justify-center">
        {/* Hidden on large screens */}
        <figure className="cta-banner hidden lg:block">
          <img
            src="/cta-banner.png"
            width="900"
            height="660"
            alt="cat"
            className="w-full"
            loading="lazy"
          />
        </figure>

        <div className="cta-content text-left">
          <img
            src="/cta-icon.png"
            width="120"
            height="35"
            alt="taste guarantee"
            className="mb-4"
            loading="lazy"
          />

          <h3 className="text-3xl font-bold my-4">
            Taste it, love it or we’ll replace it… Guaranteed!
          </h3>

          <p className="text-sm mb-6">
            At Paws, we believe your dog and cat will love their food so much
            that if they don’t … we’ll help you find a replacement. That’s our
            taste guarantee.
          </p>

          <a
            href="#"
            className="btn inline-block px-6 py-3 text-white bg-black rounded hover:bg-white hover:text-black transition-colors"
          >
            Find out more
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
