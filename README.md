Final project &ndash; A personal blogging system &ndash; Starter project
==========
This repository contains a starting point for your team's final project.

Your team should update this README to include the information required, as presented in the project handout available on Canvas.

1. An SQL script with your CREATE TABLE statements and any initialization data;

2. A README.md file containing the following information:

a. A brief introduction to your webapp

Kia ora! Welcome to "Local Hotspots", a handy webapp designed for both locals and visitors. Whether you're craving a flat white from a cosy cafe, seeking a beautiful picturesque place to spend time with your dates, family, or friends, or searching for the latest must-visit restaurant, we've got you covered. Dive into our various categories, from Restaurants to Art & Culture, and discover the best that Auckland has to offer. Simply use our easy-to-navigate menu to post your photos and start exploring today!

b. A description of the extent to which your team has completed the compulsory

1 Create acct (Complete)  
      Key Learning ==> Start with server-side code to have a standardise central interface with the front end
      
2 Account Selected Already  (Complete)  
      Key Learning ==> Front end is useful for managing alerts or checking for input errors with the server

3 Password  (Complete)  
      Key learning ==> The use of an “if” statement is a useful tool when comparing a number of items and the return function is useful for managing User responses.
      
4 Account Avatar  (Complete) 
      Key learning ==> This is a great feature requiring async await with the server and database all working in harmony to retrieve the avatar from AWS rendering it on the page.
      
5 Log-in / logout (Complete)  
      Key Learning ==> We found a button drop-down that greatly improved usability.  This opened our minds to always think about how to improve the user experience.

6 Password encryption (Complete)  
      Key learning ==> This was an extension for many of the team however it was pleasing that we learned together how to implement.
      
7 Browse all articles (no login)  (Complete)  
      Key Learning ==> We learned that with a little bit of research and teaming we were able to discover a great solution via the use of a carousel for browsing the photos.
      
8 Browse user articles (favourites) (Complete)  
      Key Learning ==> This was a feature that had previous been implemented in the earlier assignments however the step up was learning how to link to another page versus scrolling down an existing page.
      
9 WYSIWYG Editor  (Complete)  
      Key Learning ==> We had to really think on how to manage this feature as there were so many options and had the potential to really drive a lot of complications in the site.   
      
10  Edit personal information (Complete)  
      Key Learning ==> This was a quick-fire feature that we learn reusing existing code exceptional efficient to manage
      
11  CSS (Complete)  
      Key Learning ==>The coordination between team member enthusiasm and importing features with attached CSS needed tight management.

c. A description of the extra features your team has implemented

1 To create a strong user experience, we chose to develop a photo carousel that dynamically supports click through on each photo to get information on that particular blog article

3 Our theme was local hotspots, so we wanted to have some cool icons.  By linking to access “font awesome” we were able to introduce some great icons to improve the aesthetics of the app

4 Enable interactive communications with users as a result of different actions [we will need to beef this up somewhat] 

5 Enabling Grammarly to support editing blog text

6 To encourage user interaction with the site and hopefully a desire to spend more time on the site we introduced like button that toggles between like and dislike when clicked. We want it to display the amount of likes right next to the like button so users can quickly navigate to the best posts

7 We created an AWS S3 bucket for photo storage for the blog photos and avatar images.  We want to utilise cloud storage via AWS in an S3 bucket with our app so that we can upload and read our blog photos and avatar images.  We wanted try something a little more advanced than Multer

d. Instructions on what the database file (*.db file) should be named
Of course, I can expand on that:

For our webapp to work without any issues, it's important that the database file is named correctly. Kindly make sure the database file you're using with our system is named `hotspots.db`. This specific name has been integrated into various parts of our application. By ensuring the correct naming, you'll avoid potential issues when running the webapp. 

e. Does the marker need to do anything prior to running your webapp, other
than npm install?

Before running our webapp, there's nothing more to do apart from the standard `npm install`. We've made certain to integrate various modules effectively, which ensures seamless operation and minimises pre-run configurations. After executing the npm installation, the system is primed and ready for launch.

f. Does the marker need to do anything special to run your webapp, other than
running npm start?

To run our webapp, simply use the command `npm start`. There's no need for any additional steps or configurations. However, please note that we have implemented client-side cookies for enhanced user experience and security. Thus, the ensure cookies are snabled in your browser. Otherwise, just `npm start`, and you'll be navigated through the platform effortlessly.

g. At least one username / password combination for an existing user in your
system with some already-published articles

h. Any other instructions / comments you wish to make to your markers.

