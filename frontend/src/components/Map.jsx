import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

// Modal Component with Google Maps Integration
const Modal = ({ closeModal, onSubmit }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchBox, setSearchBox] = useState(null);

  // Handle location selection
  const handlePlaceChanged = () => {
    const place = searchBox.getPlaces()[0];
    if (place) {
      const { lat, lng } = place.geometry.location;
      setSelectedLocation({ lat: lat(), lng: lng() });
    }
  };

  // Handle order submission
  const handleOrderSubmit = () => {
    if (selectedLocation) {
      onSubmit(selectedLocation);
      closeModal();
    } else {
      alert('Please select a location');
    }
  };

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h2>Select Location and Submit Order</h2>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={styles.mapContainer}
            center={selectedLocation || { lat: 37.7749, lng: -122.4194 }} // Default center (San Francisco)
            zoom={12}
          >
            {selectedLocation && <Marker position={selectedLocation} />}
          </GoogleMap>
          <StandaloneSearchBox
            onLoad={(ref) => setSearchBox(ref)}
            onPlacesChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Search for a place"
              style={styles.searchBox}
            />
          </StandaloneSearchBox>
        </LoadScript>
        <button onClick={handleOrderSubmit} style={styles.submitButton}>Submit Order</button>
        <button onClick={closeModal} style={styles.closeButton}>Close Modal</button>
      </div>
    </div>
  );
};

// Main Button Component
const ButtonWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOrderSubmit = (location) => {
    console.log("Order submitted for location:", location);
    // You can send this data to your backend for processing
  };

  return (
    <div className='flex justify-center items-center'>
      <button onClick={openModal} style={styles.button}>Open Modal</button>
      {isModalOpen && <Modal closeModal={closeModal} onSubmit={handleOrderSubmit} />}
    </div>
  );
};

// Styles
const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '80%',
    maxWidth: '500px',
  },
  mapContainer: {
    width: '100%',
    height: '300px',
    marginBottom: '20px',
  },
  searchBox: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
  },
  closeButton: {
    marginTop: '10px',
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  submitButton: {
    marginTop: '10px',
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ButtonWithModal;
