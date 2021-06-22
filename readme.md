# Contents 

# Ground Hopper
Website mock ups
The live site can be veiwed [here]

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
Again to keep clear consistancy in branding for the user i used a set colour palette inspired by [Coolors](https://coolors.co/fcfafa-729ea1-2a2d34-ffb140-d64045). This palette can be veiwed [here](./assets/readmelinks/colorpalette/GHcolorpalette)

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
    - [Jquery](https://jquery.com/)

- Version control
    - [Git](https://git-scm.com/) was used as version control
    - [Git Hub](https://github.com/) was used for repository hosting

- Wireframes 
    - [Balsamiq](https://balsamiq.com/) was used to create the initial wireframes 

- Other
    - [Google Maps](https://www.google.co.uk/maps/) was used across the site 
    - [W3C Markup Validator](https://validator.w3.org/) was used as a tool to check HTML erorrs
    - [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) was used to check for erorrs in CSS
    - [Chrome lighthouse](https://en.wikipedia.org/wiki/Google_Lighthouse) Testing was used
    - Google Dev Tools was used throughout 
    - [Responsinator](http://www.responsinator.com/) was used to test the responsiveness of the website 

## Testing

### Testing User Stories
### Testing Performance
### Testing Functionality
### Known Bugs
- Whislt working on the EmailJS for the contact form i encountered an error on sending a test email, the error message can be veiwed [here](./assets/images/contactformbug.jpg). My origianl code looked like [this]() to overcome this i modified the JS code to prevent the form from posting. My final coded can be veiwed [here]().
### Further Testing
- [JSHint](https://jshint.com/) was used to check the validity of my JavaScript/JQuery code. A number of semi-colons were missing from the end of code lines so these were added in. 

## Code Validation

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

## Credits
# Code
- [Bootstrap 5.0](https://getbootstrap.com/) was used throughout the project, mainly to make the site reponsive
- The inspiration for the carousel was taken from [Bootsrap](https://getbootstrap.com/docs/4.0/examples/carousel/)
- The inspiration for the stadium cards was taken from [Bootstrap](https://mdbootstrap.com/docs/standard/components/cards/)
- The inspiration for the EmailJS code came from the Code Institute module "interactive frontend development - Sending emails using EmailJS". 

# Media
- The stadium images were obtained from [Google Images](https://images.google.co.uk/)
- The background image on the contact page was originally obtained from [Josiah Day on Unsplash](https://unsplash.com/photos/oxgb4fGNmMM)
