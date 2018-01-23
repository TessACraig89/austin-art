# Austin Wall Art

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
