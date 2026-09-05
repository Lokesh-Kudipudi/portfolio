import React, { useState } from 'react';
import { Image, X } from 'lucide-react';
import projects from '../config/projects';

const mePhotos = [
  { id: 1, src: '/me-casual.jpg', category: 'Me', alt: 'Me Casual' },
  { id: 2, src: '/me.JPG', category: 'Me', alt: 'Me Formal' },
];

let photoIdCounter = mePhotos.length + 1;
const projectPhotos = projects.flatMap(project =>
  project.images.map((image, index) => ({
    id: photoIdCounter++,
    src: image,
    category: project.title,
    alt: `${project.title} ${index + 1}`,
  }))
);

const photos = [...mePhotos, ...projectPhotos];
const categories = ['All', 'Me', ...projects.map(p => p.title)];


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="h-full w-full bg-[#1e1e1e] p-5 overflow-y-auto text-white">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <Image size={28} className="text-blue-400" /> Gallery
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category 
                ? 'bg-blue-500 text-white' 
                : 'bg-[#2d2d2d] text-gray-300 hover:bg-[#3d3d3d]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <div 
            key={photo.id} 
            className="group relative aspect-video bg-[#2d2d2d] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-white font-medium truncate">{photo.alt}</span>
              <span className="text-gray-300 text-xs">{photo.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <button 
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedPhoto(null); }}
          >
            <X size={24} />
          </button>
          <div 
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            {/* Optional caption below or over the image */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
