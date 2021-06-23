# Contents 

# Ground Hopper
![Website mock ups](https://olivergray03.github.io/MS2-Example/assets/readmelinks/GroundHopperscreenmockup.jpg)
The live site can be viewed [here](https://olivergray03.github.io/MS2-Example/)

# UX
## Strategy
### Project Goals
The goal of this project is to build an interactive front-end website that responds to user actions, allowing users to actively engage with data and alter the way the site displays information. To achieve this goal i will be developing a central hub for all league one football fans looking to travel to stadiums accross the country. The main feature will see the user able to call on the Google maps API in order to get directions to the stadium from their location.

## Why this idea 
I am a football fan myself and often travel to away games accross the country. In order to find more information about the ground i am visiting i use the website for each individual team and often these pages are inconsistant in the information they provide. I believe there is a market for a "one-stop-shop" website where a fan can easily access the information they desire of all 24 football League One teams in one place. 

## User Stories 
As a user i am/i need to;
- I am using the site to find out more information regarding the stadium location before i set off on my journey
- I need to easily navigate the site in order to find the stadium i am visiting 
- I would like details on the stadium i am visiting emailed to me for future reference 
- I am interested in veiwing the geographical locations of all 24 football stadiums in League One
- I would like to follow and become a part of the "Ground Hopper" community through social media 
- I would like to provide feedback on the page and suggest ways in which to enhance and improve the experience in the future

# Structure
## Features
This webiste will consist of two pages a home page and a contact page. Each page will be based on a template HTML & CSS in order to keep brand consistancy. To achieve the project goal both pages will have interactive elements in order to keep the user engaged and ensure ease of use in reaching their user goals. 

### Home Page
The home page will consist of the below features; 
- A responsive nav bar in order to switch between the homepage and contact page
- A featured carousel along with interactive buttons to birng up a modal with stadium details
- A search and sort filter for the user to easily find the stadium they want to veiw 
- All 24 cards will have an interactive button to bring up a modal detailing the google maps API individual to each stadium card
- The modal will include an option to have the details emailed to the users email address
- Social media links will be featured in the footer for the user to continue interacting and following the community

### Contact Page
The contact page will consist of the below features;
- A feedback form for the user to provide suggestions on how to improve the experience in the future 
- The feedback form will also include options for both the site creator and user to recieve an email from the form
- Social media links will be featured in the footer for the user to continue interacting and following the community

## Features and User stories 
The features listed above have all been thought through with the user at the forefront of the design. All the features are designed to make the user story as engaging as possible whilst also providing easy access to the information on the stadium the user rewquires. The site will attempt to engage all users and ask for feedback in order to create a community of fans who actively want to improve the site as they continue to support their team. 

## Design
I used a number of different sources in my design in order to help the user navigate the page clearly and easily. I kept the font consistant accross the site using [Cabin from Google Fonts](https://fonts.google.com/specimen/Cabin?query=cabin). I felt this font was asthetically please whislt also clear to read for any user. 
Again to keep clear consistancy in branding for the user i used a set colour palette inspired by [Coolors](https://coolors.co/fcfafa-729ea1-2a2d34-ffb140-d64045)  and is seen below; 
![Color Palette](https://olivergray03.github.io/MS2-Example/assets/readmelinks/colorpalette/GHcolorpalette.jpg)

## Wireframes

The site was designed with a mobile-first approach.

The same design was used for mobile, tablet and desktop to ensure consistancy for the user. The only difference being the layout and responsive design when switching from each device size. 

My wireframes were created using [Balsamiq](https://balsamiq.com) and can be viewed [here](./assets/readmelinks/wireframes/GroundHopperms2wireframes.pdf)

## Technology Used

### Workspaces

- Workspaces
    - Gitpod was used as the integrated development environment

- Languages 
    - [HTML5](https://en.wikipedia.org/wiki/HTML5) 
    - [CSS 3](https://en.wikipedia.org/wiki/CSS) 
    - [Java Script](https://en.wikipedia.org/wiki/JavaScript)

- Frameworks and Libraries
    - [Bootstrap 5](https://getbootstrap.com/) was used for the responsiveness and styling
    - [Font Awesome](https://fontawesome.com/) was used for the icons
    - [Google Fonts](https://fonts.google.com/) was used for font styles
    - [Unsplash](https://unsplash.com/) was used for the main source of images
    - [Jquery](https://jquery.com/) was used for the JavaScript

- Version control
    - [Git](https://git-scm.com/) was used as version control
    - [Git Hub](https://github.com/) was used for repository hosting

- Wireframes 
    - [Balsamiq](https://balsamiq.com/) was used to create the initial wireframes 

- Other
    - [Google Maps API](https://developers.google.com/maps/apis-by-platform) was used in the stadium cards
    - [W3C Markup Validator](https://validator.w3.org/) was used as a tool to check HTML erorrs
    - [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) was used to check for erorrs in CSS
    - [Chrome lighthouse](https://en.wikipedia.org/wiki/Google_Lighthouse) Testing was used
    - Google Dev Tools was used throughout 
    - [Responsinator](http://www.responsinator.com/) was used to test the responsiveness of the website 

## Testing

### Testing User Stories

- There was primarily one main user type of this site, someone  who supports a league one football team and travels around the country to away games. They are interested in finding out where in the country stadiums are located and are looking for more information regarding the stadiums. To ensure this user was getting a positive experience when using the site i performed/followed the below steps; 

- Navigate around the website and between pages with ease
    - The user is immediately met with the navigation bar at the top of the page
    - The clickable links in the nav bar change color on a cursor hover in order to make the purpose of these links clear
    - The navigation bar collapses into recognised bars on small screens for a cleaner veiw

- For non specific and interested users, there is a featured carousel at the top of the page with an interactive explore more button for users to find out more information on this stadium. 

- For users who are looking for specific stadiums they wish to find information on they can either scroll down the page looking for the team/stadium they would like to veiw or;
    - The user can search for a stadium using an interactive search bar. This search feature will clear all other stadium cards from the page targeting the one stadium the user has searched. 
    - This search feature is not case sensitive so user can search in upper or lower case

- On finding the stadium card the user wishes to veiw there is an interactive explore more button which generates a pop up fixed to the middle of the screen with a noscroll so the user cannot lose the modal. 
    - This modal displays some facts about the stadium
    - The modals main feature for the user is a large interactive Google maps section. This Google map using the Google maps API locates the stadium and displays it on the map. As an additional feature the user can zoom out and see cluster locations of the other stadiums around the country. 

- Find out more about the Ground Hopper community and follow peoples stories on social media
    - listed in the footer of both pages are clear links to the social media pages
    - All these links change colour in the theme of the page to indicate they are clickable links
    - As is best practice these pages open in a new tab for the user so they can return to the gym page easily

- Contact the site owner in order to provide feedback on the site and suggest ideas on how to improve user experience and expand the site 
    - On the contact page page there is a clear and simple to use form with instructions on its purpose and use. 
    - To provide interactivity to this form EmailJS has been used, this means when a user submits feedback both the site user and site owner will recieve an email containing the enquiry for discussion. 

### Testing Performance
### Testing Functionality
### Known Bugs

- Whislt working on the EmailJS for the contact form i encountered an error on sending a test email, the error message can be veiwed [here](https://olivergray03.github.io/MS2-Example/assets/images/Contactformbug.jpg). My origianl code looked like [this](https://olivergray03.github.io/MS2-Example/assets/readmelinks/contactformbugoriginalcode.jpg) to overcome this i modified the JS code to prevent the form from posting. My final coded can be veiwed [here]().
### Further Testing

- The website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers
- The website was veiwed on a variety of devices such as Desktop, laptop, iPhone 7 plus, iPhone X and iPad mini 4
- The above testing showed no errors and the website is cross-browser and cross-device compatible

## Code Validation

- [JSHint](https://jshint.com/) was used to check the validity of my JavaScript/JQuery code. A number of semi-colons were missing from the end of code lines so these were added in.
- [W3C CSS](https://jigsaw.w3.org/css-validator/) was used to validate my CSS. 
    - four errors were found when running this, as seen below. To fix these i removed the "font weight" on both the nvabar brand and nav item a classes, i also removed the box shadow values on both the stadium and carousel buttons when active.  
![CSS Errors](https://olivergray03.github.io/MS2-Example/assets/readmelinks/CSSvalidatorerrors.jpg)


## Deployment

This project was deployed to Github pages using the following steps:

1. Log into Github 
2. Select the OliverGray03/MS2-Example respository
3. Click the settings tab at the top of the repository
4. Scroll to the "GitHub Pages" section of the page
5. Under "Source", click the dropdown called "None" and select "Master Branch"
6. The page will automatically refresh
7. The project has now been deployed. Scroll back to the GitHub pages section and click on the link above the source heading to view the live site.

## Forking the GitHub repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

1. Log into Github 
2. Select the OliverGray03/MS2-Example respository.
3. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button
4. You should now have a copy of the original repository in your GitHub account

## Making a clone to run locally

1. Log into GitHub
2. Select the OliverGray03/MS2-Example respository
3. Under the repository name, click "Clone or download"
4. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link
5. Open Git Bash
6. Change the current working directory to the location where you want the cloned directory to be made
7. Type "git clone", and then paste the URL you copied in Step 3

## Future Developments 

The idea and goal of this site was to build a community of smaller football club fans that can interact and use the site as aone stop shop for their travelling needs. Whilst i am happy with the site below are some basic ideas i would like to work on in order to help integrate a community further; 
- I would like fans of the site to be able to submit images of stadiums they have visited that can be displayed in the stadium modal.
- I would like fans to be able to submit suggestions based on their previous experiences, things like best parking, travel advice and local pubs restaurants
- I would like to expand the site and add further pages for other lower football leagues and possible european leagues. 

## Credits
# Code
- [Bootstrap 5.0](https://getbootstrap.com/) was used throughout the project, mainly to make the site reponsive
- The inspiration for the carousel was taken from [Bootsrap](https://getbootstrap.com/docs/4.0/examples/carousel/)
- The inspiration for the stadium cards was taken from [Bootstrap](https://mdbootstrap.com/docs/standard/components/cards/)
- The inspiration for the EmailJS code came from the Code Institute module "interactive frontend development - Sending emails using EmailJS". 
- The inspiration to use the Google maps API came from the Code Institude module "interactive frontend development - Google maps"
- The inspiration for the contact form came from [Colorlib](https://colorlib.com/wp/?s=forms)

# Media
- The stadium images were obtained from [Google Images](https://images.google.co.uk/)
- The background image on the contact page was originally obtained from [Josiah Day on Unsplash](https://unsplash.com/photos/oxgb4fGNmMM)
