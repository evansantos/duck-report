# works-fresh

[Frontend Application => https://works-fresh-a1wkesssx.vercel.app/](https://works-fresh-a1wkesssx.vercel.app/)

[Backend Application => https://worksfresh-api.herokuapp.com/](https://worksfresh-api.herokuapp.com/)

### How to run

```sh
yarn install # for dependencies installation
yarn start # for production environment
yarn dev # for development environment
```

### Approach to the problem

As the project is a crud application containing frontend and backend to be done I break into several steps of the implementation which reflects in the choosen technologies used in this project.

- Frontend
  - created the project using Create-react-app and start to apply routing for the two different routes
  - following I created the form with fields component and added some validation using Formik with YUP
  - After that created a service to post information into our backend and connected it to the application through axios
  - then, after everything was sent in the form, I created the remaining component to show the reports previously filled and connect with a get function of the previously created service
- Backend
  - used mongoDB as my start pointing so I created just a small javascript file to see how I could use Monk with mongo
  - After mongoDB worked, I started to creating the routes to receive requests
  - Once, it was done, I created the controllers to fill the gap between routes and the db and added a layer of validation to guarantee that we could have only the expected data on the db
- Deployment
  - I've choosen to deploy the code into different SaaS to see if it was really possible with Monorepo

### Technologies used

- Global
  - dotenv - Envinronment variables
  - Prettier - Format the code after save
  - eslint - Javascript code style standards
  - Yarn Workspaces - Creation of the monorepo and share duplicated downloaded packages
- backend
  - NodeJS (LTS/12) - Backend language
  - ExpressJS - Application Routing
  - Cors - For preventing cross-origin errors
  - Monk - MongoDB ORM Layer
  - Joi - Javascript Object Validation
  - Nodemon - Prevent stop and starting while developing backend
  - MongoDB/Atlas - Database
- Frontend
  - ReactJS - Frontend Framework
  - Typescript - For typing
  - Formik - Form Utility
  - Yup - Form data validation
  - Semantic UI React - Components
- CD
  - Vercel - Frontend Deployment
  - Heroku - Backend Deployment

### Component diagram

![](https://i.imgur.com/cEktCOI.jpg)

### Database model diagram

As I'm using MongoDB for this project basically my model is a document where I have this structure

```ts
{
  _id: ObjectId;
  datetime: Date;
  food: String;
  location: String;
  quantity: Int32;
  foodType: String;
  amount: Int32;
}
```

### Time spent

Given that I couldn't spent so much time due to work issues, this are the times I've spent on the whole project

- Backend: 4 hours
- Frontend: 2 hours
- CD: 1 hour

## TODO

- backend
  - [ ] Testing
  - [ ] Authentication
- frontend
  - [ ] Testing
