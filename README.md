# PROJECT DEMO LINK

https://drive.google.com/file/d/17ebQkun7wqz_yx3XQCDH0wnWc41UZ8gT/view?usp=sharing


# MERN ZOMATO CLONE

Its food ordering website from restaurants based on indian food delivery company Zomato.
Its MERN based full stack project. 


## Features

- Responsive
- Dynamic Website connected with Database
- Sign In and Sign Out feature
- Sign In and Sign Out by Google is available
- Add to Cart feature
- Restaurant location is shown on map
- User can add reviews in real time
- User can give ratings
- Razorpay payment option is present


## Tech Stack

**Client:** React, Redux, TailwindCSS, Headless UI, Leaflet, Razorpay

**Server:** Node, Express, MongoDB, Babel, AWS Cloud products, Google Cloud

**Deployment:** Docker, AWS Cloud products


## API Reference

- auth (sign in and sign up user)
- user (user related details, username, email, password)
- order (order and it's details)
- menu (menu and it's details)
- image (storing all the images related to the project)
- food (food items and their details)
- restaurant (restaurant and their details)
- review (storing all the list of reviews)


#### Auth API

- user singn-up and sign-in

#### User API

- npm i passport
- npm i passport-jwt
- server => config => route_config.js (create)
- config => server => index.js
- npm i express-session
Routes -------------------
- Get authorized user data (ptivate)
- Get user data (For the review system) (public)
- Update user data (Private)

#### Order API

- Get all orders by user id
- Add new order

#### Menu API

- Get menu based on menu id
- Get all list of menu images with id

#### Image API

- npm i multer (uploading heavy data like image)
- server -> utils -> s3.js
Routes ---------------------
- Upload image
- Get image by id

#### Food API

- get food details on id
- get all food based on particular restaurant
- get all food based on particular category

#### Restaurant API

- get all restaurant details based on city
- get individual restaurant details based on id
- get restaurant details based on search string

#### Review API

- Get all review for a particular restaurant
- Add new food/restaurant review and rating
- Delete a specific review

#### setup validation
- npm i joi
- server => validation =>
- auth_validation.js(sing up and sign in)
- comman_validation.js
#### aws config
- create s3 bucket for stoaring image
- create IAM sub-accout
- npm i aws-sdk
#### google auth api
- https://console.cloud.google.com (config)
- npm install passport-google-oauth2
- config => googe_config.js
#### install bcryptjs jsonwebtoken
- npm install bcryptjs jsonwebtoken
- setup salting and hasing in user schema
#### additioaal config
- add .gitignore (add content)
- add .babelrc (add content from https://www.freecodecamp.org/news/setup-babel-in-nodejs/)
- add scripts on package.json
- add index.js and create a server
## Documentation

[Documentation Link](https://documenter.getpostman.com/view/23030920/2s8YmPu2yW)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`

`AWS_S3_ACCESS_KEY`

`AWS_S3_SECRET_KEY`

`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`
## Create React app

- npx create-react-app client
- config tailwind css
- config headless ui https://headlessui.com/react/menu#installation
- npm i axios swiper react-router-dom react-rating-stars-component
- npm install leaflet (config in index.html https://react-leaflet.js.org/docs/start-installation/)
- npm install react-leaflet
- npm install react-icons

### files
- components, layouts, pages
- pages => HomePage.jsx, GoogleAuthPage.jsx, RestaurantPage.jsx, CheckoutPage.jsx
- components => Restaurant => Overview.jsx, OrderOnline.jsx, Reviews.jsx, Menu.jsx, Photos.jsx
- layouts => CheckoutLayout.jsx, HomePageLayout.jsx, RestaurantLayout.jsx (HOC)
- components => Navbar, FoodTab, Delivery, Dining, NightLife, Nutrition

### ui design
- Navbar 
- npm i classnames (for easy conditional statement)
- taliwind.config.js added custom colors
- FoodTab 
- home page => nested rotes (Delivery, Dining, NightLife, Nutrition)
### Delivery 
- Delivery Carousel 
- Restaurant Card 
### Dining 
- Picture Carousel 
### Night life 
- Night life Carousel 
### Nutrition 
- Nutrition Hero Carousel 
- Nutrition Carousel 
- NutritionCard 
### Restaurant Details 
- image grid 
- info button 
- restaurant info 
- tabs 
### Restaurant Overview 
- npm i react-simple-image-viewer
- npm i dayjs
- Menu Collection 
- Menu Similar Restaurant Card 
- Review Card 
- MapView 
- Menu 
- Add Review 
- Photo Collection
- Order Online 
- Cart Container 
- Auth 
- Checkout 
- razorpay added ## Color Reference

zomato: {

          50: "#ffe5e7",
          100: "#fab5b9",
          200: "#f9848b",
          300: "#f9555d",
          400: "#f92d30",
          500: "#e01d19",
          600: "#ae1514",
          700: "#7c0d0f",
          800: "#4a0509",
          900: "#1a0002",
          
        }

## Feedback

If you have any feedback, please reach out to me at rajat7229@gmail.com

