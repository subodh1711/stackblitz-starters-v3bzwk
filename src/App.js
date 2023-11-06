import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imageArray = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        imageArray.push(reader.result);
        if (imageArray.length === files.length) {
          setSelectedImages(imageArray);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      {selectedImages &&
        selectedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`uploaded-${index}`}
            style={{ maxWidth: '100px', maxHeight: '100px', margin: '10px' }}
          />
        ))}
    </div>
  );
};

export default ImageUpload;
