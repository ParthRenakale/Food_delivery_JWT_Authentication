import React, { useState } from "react";

const MapModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);

    // Get the current location and display it on the map
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        document.getElementById("current-map").innerHTML = `<iframe width="700" height="300" src="https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed"></iframe>`;

        // Start watching the location and update the map
        const watchId = navigator.geolocation.watchPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            document.getElementById("watch-map").innerHTML = `<iframe width="700" height="300" src="https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed"></iframe>`;
          },
          (error) => {
            console.error("Error watching location: ", error);
            alert("Unable to watch location.");
          }
        );

        // Store the watchId to clear it later
        document.getElementById("mapModal").setAttribute("data-watch-id", watchId);
      },
      (error) => {
        console.error("Error getting current location: ", error);
        alert("Unable to retrieve location.");
      }
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);

    // Stop watching the location when the modal is closed
    const watchId = document.getElementById("mapModal").getAttribute("data-watch-id");
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
    }
  };

  return (
    <div className="flex justify-center">
      <button onClick={openModal} className="text-white rounded bg-red-500 p-5">Open Map Modal</button>

      {isModalOpen && (
        <div
          id="mapModal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              width: "80%",
              maxWidth: "800px",
            }}
          >
            <h2 className="text-black">Current Location</h2>
            <div id="current-map"></div>

            <h2 className="text-black">Live Location Watch</h2>
            <div id="watch-map"></div>

            <button onClick={closeModal} style={{ marginTop: "20px" }} className="text-white rounded bg-red-500 p-5">
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapModal;