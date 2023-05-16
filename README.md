# **Trimble take-home test assignment**

## **Instalation**

To install and run the application, follow these steps:

1. Clone this repository
2. Install dependencies for both the backend and the frontend by running the command npm install inside each folder (/backend and /frontend)
3. Start the API server by running the command npm run start inside the /backend folder
4. Start the frontend application by running the command npm run dev inside the /frontend folder

## **API Endpoints**

- **GET /trucks**: List all trucks
- **POST /trucks**: Create a new truck (Attributes: chassis, model, year)
- **DELETE /trucks/:id**: Delete a truck by ID
- **POST /trucks/:id/locations**: Add the last location of a truck (Attributes: chassis, latitude, longitude)
- **GET /trucks/:id/locations/last**: Get the last location of a truck by truck ID

## **Technologies**

- Nest.js
- MongoDB (Mongoose)
- React.js (react-router, axios)
- Material-UI
- react-leaflet

## **Final Thoughts**

In this project, I have had the opportunity to showcase my skills and knowledge in developing a RESTful API using NodeJS with the NestJS framework and a frontend using ReactJS with Material-UI and React-Router. I would like to express my gratitude to the company for giving me the chance to participate in this project and for providing me with feedback throughout the process.

During the development process, I faced some challenges, such as implementing database relationships with NestJS, but I was able to overcome them thanks to my problem-solving skills and the resources available online, since it was my first time using this framework.

In addition, I have learned how to work with databases such as MongoDB, which was a new experience for me.

Moving forward, I believe that there are always opportunities for improvement and growth, and I would like to continue learning and expanding my skills. I am open to any feedback or suggestions for improvement and would be happy to discuss any future opportunities with the company.
