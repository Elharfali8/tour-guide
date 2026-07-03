// components/pages/Dashboard/FeaturedTours.tsx
import React from 'react';
import { MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type Tour = {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  availableDates: string[];
};

type FeaturedToursProps = {
  tours?: Tour[];
};

const FeaturedTours = ({ tours }: FeaturedToursProps) => {
  // Mock data if no tours provided
  const defaultTours: Tour[] = [
    {
      id: '1',
      title: 'Moroccan Desert Adventure',
      location: 'Merzouga, Morocco',
      price: 299,
      duration: '3 Days',
      rating: 4.9,
      reviews: 128,
      image: '/images/tours/desert.jpg',
      availableDates: ['2026-07-15', '2026-07-20', '2026-07-25'],
    },
    {
      id: '2',
      title: 'Atlas Mountains Trek',
      location: 'Atlas Mountains, Morocco',
      price: 199,
      duration: '2 Days',
      rating: 4.8,
      reviews: 96,
      image: '/images/tours/atlas.jpg',
      availableDates: ['2026-07-18', '2026-07-22', '2026-07-28'],
    },
    {
      id: '3',
      title: 'Marrakech City Tour',
      location: 'Marrakech, Morocco',
      price: 149,
      duration: '1 Day',
      rating: 4.7,
      reviews: 215,
      image: '/images/tours/marrakech.jpg',
      availableDates: ['2026-07-16', '2026-07-19', '2026-07-23'],
    },
  ];

  const displayTours = tours && tours.length > 0 ? tours : defaultTours;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Featured Tours</h3>
        <Link
          href="/tours"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group"
        >
          See More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {displayTours.slice(0, 3).map((tour) => (
          <div
            key={tour.id}
            className="group cursor-pointer rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md"
          >
            {/* Image */}
            <div className="relative h-40 w-full bg-gray-100 overflow-hidden">
              {tour.image ? (
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                  <span className="text-gray-400 text-sm">No image</span>
                </div>
              )}
              {/* Rating Badge */}
              <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                {tour.rating} ({tour.reviews})
              </div>
              {/* Duration Badge */}
              <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
                {tour.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                {tour.title}
              </h4>
              
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">{tour.location}</span>
              </div>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{tour.availableDates.length} dates available</span>
                </div>
                <div className="text-sm font-bold text-blue-600">
                  ${tour.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button - Alternative if you want a button instead of link */}
      <div className="mt-6 text-center">
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl text-sm font-medium transition-colors"
        >
          View All Tours
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedTours;