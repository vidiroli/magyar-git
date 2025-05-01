
import React from 'react';
import { Link } from 'react-router-dom';

interface GuitarCardProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}

const GuitarCard: React.FC<GuitarCardProps> = ({ id, name, imageUrl, price, category }) => {
  return (
    <Link to={`/gitar/${id}`} className="guitar-card-hover block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
        <div className="relative pb-[100%]">
          <img 
            src={imageUrl} 
            alt={name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <span className="text-xs text-gray-500 uppercase">{category}</span>
          <h3 className="text-lg font-medium mt-1">{name}</h3>
          <p className="text-mahogany-dark font-semibold mt-2">{price.toLocaleString('hu-HU')} Ft</p>
        </div>
      </div>
    </Link>
  );
};

export default GuitarCard;
