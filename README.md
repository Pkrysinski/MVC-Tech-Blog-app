# Ecommerce-backend-mgmt-app

## Purpose
The purpose of this app is to showcase our understanding of the Model-View-Controller (MVC) architecture through expressing our knowledge of why separation of concerns in this consideration is a great practive to follow.  I'll be building a blog-style tech forum where users can post questions and respondants can provide answers.  This is a real test of combining both front-end grace with back-end functionality and even starting to involve some authentication/authorization in there now as well.


## Educational Concepts Implemented
>MVC paradigm

>Handlebars.js

>Sessions and Cookies

>Express.js middleware

## Links

Link to deployed application...
https://mvc-tech-blog-app-production.up.railway.app/

Link to GitHub repo...
https://github.com/Pkrysinski/MVC-Tech-Blog-app


## User Story

AS A developer who writes about tech...
I WANT a CMS-style blog site,
SO THAT I can publish articles, blog posts, and my thoughts and opinions.

## Acceptence Criteria Notes

GIVEN a CMS-style blog site...

- - - - -
WHEN I visit the site for the first time,
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.
>DONE.  When the app is fired up, the user is taken to the home page which contains blog posts, navigation links, and the option to login or logout.

- - - - -
WHEN I click on the homepage option,
THEN I am taken to the homepage.
>DONE.  Homepage href now takes you to the homepage.

- - - - -
WHEN I click on any other links in the navigation,
THEN I am prompted to either sign up or sign in.
>DONE, this now works when you try to view a blog post, go to the DashBoard to create a new post.

- - - - -
WHEN I choose to sign up,
THEN I am prompted to create a username and password.
>DONE.  Authentication complete.

- - - - -
WHEN I click on the sign-up button,
THEN my user credentials are saved and I am logged into the site.
>DONE.  Authentication complete.

- - - - -
WHEN I revisit the site at a later time and choose to sign in,
THEN I am prompted to enter my username and password.
>DONE.  Authentication complete.

- - - - -
WHEN I am signed in to the site,
THEN I see navigation links for the homepage, the dashboard, and the option to log out.
>DONE.  Navigation links displaying properly.

- - - - -
WHEN I click on the homepage option in the navigation,
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created.
>DONE.

- - - - -
WHEN I click on an existing blog post,
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.
>TODO: Need to build in option to leave a comment.

- - - - -
WHEN I enter a comment and click on the submit button while signed in,
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.
>TODO: Need to build in option to leave a comment.

- - - - -
WHEN I click on the dashboard option in the navigation,
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.
>DONE.

- - - - -
WHEN I click on the button to add a new blog post,
THEN I am prompted to enter both a title and contents for my blog post.
>DONE.  newpost.handlebars added to support creation of new blog post.

- - - - -
WHEN I click on the button to create a new blog post,
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post.
>DONE. New post now shows up on homepage.

- - - - -
WHEN I click on one of my existing posts in the dashboard,
THEN I am able to delete or update my post and taken back to an updated dashboard.
>DONE: Delete functionality works.
>DONE: Update functionality works.

- - - - -
WHEN I click on the logout option in the navigation,
THEN I am signed out of the site.
>DONE.

- - - - -
WHEN I am idle on the site for more than a set time,
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments.
>DONE.
