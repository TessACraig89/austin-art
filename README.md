# Austin Street Art

Web application used to browse the street art of Austin, each piece of art has a title, picture, and address.

## Downloading Instructions
Go to this link to see the app deployed: ([link](#))

To run it locally,
1. Clone this repository
1. `npm install`
1. `npm start`
1. Direct the browser to `localhost:3000/`

## Technologies Used
- [node](http://nodejs.org)/npm - A server side JavaScript tool and the accompanying package manager
- [express.js](https://github.com/expressjs/express) - A back-end web framework for [node](http://nodejs.org)
- jQuery - A JavaScript library that allows for cleaner, less verbose code
- ejs - Embedded JavaScript allows JS to be incorporated in HTML codes
- OAuth - Enables authorization of user login by 3rd party sources
- MongoDB/Mongoose - NoSQL database used to create and store data
- Google Maps API - for visualizing the location information

## Trello

To keep up with my progress check out [My Trello Board](https://trello.com/b/ei25yci7/austin-wall-art)!

## Entity Relationship Diagram
![Entity Relationship Diagram](public/images/ERD.png)

## Routes Layout

URL	| HTTP Method	| Action	| Description
--- | --- | --- | ---
/login	| GET	| SHOW | show login page
/about	| GET	| SHOW	| show about page
/art	| GET	| SHOW	| show art page
/logout	| GET	| SHOW 	| routes back to login page
/logout/button	| PUT	| UPDATE	| update 'login' button to 'logout'
/user/:id	| GET	| SHOW	| show user profile
/user/:id/save	| PUT	| UPDATE	| update 'edit' button to 'save'
/user/:id/cancel 	| POST	| CREATE	| put 'cancel' button
/user/:id/update	| PUT	| UPDATE	| update user profile
/favorites/update	| PUT	| UPDATE	| update favorites list
/auth/google	| GET	| SHOW	| redirect user to google.com
/auth/google/callback	| GET	| SHOW	| redirect user to either login page or user profile


## Wireframes

### Home/About Page

![Home/About Page](public/images/about.png)


### Login Page

![Login Page](public/images/login.png)


### Art Page

![Art Page](public/images/art.png)


### User Profile Page

![User Profile Page](public/images/user.png)


### Editing User Profile Page

![Editing User Profile Page](public/images/user-edit.png)


## Stretch Goal

### Map Page

![Map Page](public/images/map.png)

## References
1. Google API Services [link](https://console.developers.google.com/apis/dashboard?project=austin-art&duration=PT1H)

1. Flexbox [link](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))
