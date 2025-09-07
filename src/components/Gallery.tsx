import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const photos = [
  {
    src: 'https://picsum.photos/id/1018/1024/768',
    width: 1024,
    height: 768,
    category: 'Nature'
  },
  {
    src: 'https://picsum.photos/id/1015/1024/768',
    width: 1024,
    height: 768,
    category: 'Nature'
  },
  {
    src: 'https://picsum.photos/id/1025/1024/768',
    width: 1024,
    height: 768,
    category: 'Architecture'
  },
  {
    src: 'https://picsum.photos/id/1024/1024/768',
    width: 1024,
    height: 768,
    category: 'People'
  },
  {
    src: 'https://picsum.photos/id/102/1024/768',
    width: 1024,
    height: 768,
    category: 'People'
  },
  {
    src: 'https://picsum.photos/id/1019/1024/768',
    width: 1024,
    height: 768,
    category: 'Nature'
  },
  {
    src: 'https://picsum.photos/id/1020/1024/768',
    width: 1024,
    height: 768,
    category: 'Architecture'
  },
  {
    src: 'https://picsum.photos/id/1021/1024/768',
    width: 1024,
    height: 768,
    category: 'Architecture'
  },
  {
    src: 'https://picsum.photos/id/1022/1024/768',
    width: 1024,
    height: 768,
    category: 'Nature'
  },
  {
    src: 'https://picsum.photos/id/1023/1024/768',
    width: 1024,
    height: 768,
    category: 'People'
  }
];

const categories = ['All', 'Nature', 'Architecture', 'People'];

const GalleryComponent: React.FC = () => {
  const [index, setIndex] = useState(-1);
  const [filter, setFilter] = useState('All');

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`mx-2 px-4 py-2 rounded ${filter === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <PhotoAlbum
        photos={filteredPhotos}
        layout="rows"
        targetRowHeight={250}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={filteredPhotos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default GalleryComponent;