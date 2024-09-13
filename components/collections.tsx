import React from 'react';
import Image from 'next/image';

const collections = [
  {
    title: 'Hot Summer Deals',
    subtitle: 'Selected Items. Online Only.',
    imageSrc: '/offer-banner-1.jpg',
    alt: 'Hot Summer Deals',
    href: '#',
  },
  {
    title: 'Spoil your true love',
    subtitle: 'Treats & Grooming',
    imageSrc: '/offer-banner-2.jpg',
    alt: 'Spoil your true love',
    href: '#',
  },
  {
    title: 'New in this year',
    subtitle: 'Our Brand You Will Love',
    imageSrc: '/offer-banner-3.jpg',
    alt: 'New in this year',
    href: '#',
  },
];

const Collections = () => {
  return (
    <div className="w-full px-8 py-10 lg:py-24">
      <div className="container mx-auto flex flex-col gap-14">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <li key={index} className="relative bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${item.imageSrc})` }}>
              <div className="p-8 bg-white bg-opacity-0 rounded-lg flex flex-col justify-center items-start space-y-4">
                <p className="text-sm font-bold uppercase">{item.subtitle}</p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-orange-500">{item.title.split(' ').slice(-1)}</span>
                </h3>
                <a href={item.href} className="btn bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-black transition-all">
                  Read More
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Collections;
