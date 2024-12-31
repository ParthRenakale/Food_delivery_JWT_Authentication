MERN Stack Food Delivery App with JWT Authentication
This is a MERN Stack (MongoDB, Express, React, Node.js) based Food Delivery App with JWT (JSON Web Token) Authentication. This app allows users to sign in, browse a list of food items, place orders, and view their personal accounts securely.

The app also includes a feature to track the user's current location on the map using real-time GPS coordinates.

Features
User Authentication:

Users can sign up, log in, and access a secure personal account page.
JWT authentication ensures that each user’s personal page is protected and cannot be accessed directly through the URL by unauthorized users.
Food Selection:

After logging in, users are presented with a list of food items to choose from.
Users can select their orders, which are stored in localStorage for later use.
The stored orders can be used for bill calculation when the user is ready to checkout.
Location Access:

The app includes a button that opens a modal with an integrated map showing the user's current location and live location.
Real-time latitude and longitude are used to provide an accurate map visualization of the user's current position.
Sign Out:

Users can sign out at any time, which will end their session and redirect them to the login page.

Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Token (JWT)
Map Integration: Google Maps API (for location visualization)
State Management: React Context API / LocalStorage

Features in Detail
User Authentication
Sign Up: Users can create an account by providing their details (e.g., name, email, password).
Login: After signing up, users can log in with their credentials.
JWT Authentication: Upon successful login, a JWT token is generated and stored in localStorage. This token is used to authenticate subsequent requests to the backend.
Personal Account Page
After successful login, users are redirected to their personal account page where they can:
View a list of available food items.
Place orders, which are stored in localStorage for later use.
The personal account page is protected and cannot be accessed directly from the URL without a valid JWT token.
Food Item Selection
Users can browse a list of food items and place orders.
The order details are stored in localStorage, which can later be accessed for bill calculation.
Map Integration
Users can open a modal by clicking the "Open Map" button.
The modal displays the current location and live location of the user on a map, using Google Maps API.
Real-time latitude and longitude are used to provide accurate location visualization.
Sign Out
Users can log out, which will clear the stored JWT token from localStorage and redirect them to the login page.
After sign-out, the user is no longer able to access the personal account page directly via URL.

Conclusion
This app demonstrates a full-stack MERN application with secure authentication using JWT, food item selection, and real-time location tracking. The app is designed to offer a seamless experience for users, with an emphasis on security and convenience.
